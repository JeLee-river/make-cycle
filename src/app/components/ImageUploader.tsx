import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Prediction = {
  className: string;
  probability: number;
};

type ImageUploaderType = {
  inputImageSource: string;
  prediction: Prediction;
};

function ImageUploader({ inputImageSource, prediction }: ImageUploaderType) {
  return (
    <>
      {inputImageSource && prediction && (
        <>
          <div className='ImageUploader_previewUploadImage'>
            <Image
              src={inputImageSource}
              width={500}
              height={500}
              alt='업로드한 이미지'
            />
          </div>
          <Link href={`/${prediction.className}`}>분리수거 방법 확인</Link>
        </>
      )}
    </>
  );
}

export default ImageUploader;
