function DragImageHandler({
  setInputImage,
  handleUploadClick,
}: {
  setInputImage: React.Dispatch<React.SetStateAction<string>>;
  handleUploadClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}) {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    try {
      const userImage = files[0];
      const validType = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!userImage || !validType.includes(userImage.type)) {
        throw new Error(
          '지원하지 않는 형식입니다. 이미지 파일을 업로드 해주세요.',
        );
      }

      const usersDropImageURL = URL.createObjectURL(userImage);
      setInputImage(usersDropImageURL);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        className='flex h-64 w-96 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-gray-300 bg-slate-300 transition-colors hover:border-gray-400'
      >
        <h3 className='text-2xl font-medium text-olive'>
          이미지 드래그 앤 드롭 또는 클릭
        </h3>
        <p className='text-1xl font-regular text-olive'>
          이미지 파일 형식만 가능합니다. (jpg, png, jpeg)
        </p>
      </div>
    </>
  );
}

export default DragImageHandler;