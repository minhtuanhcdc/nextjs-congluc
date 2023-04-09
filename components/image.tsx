import Image from 'next/image'


export default function myImage({props}){
          return (
          <div>
            <Image 
              src={props.src}
              alt={props.alt}
              className={props.classImage}
              width={props.higthImage}
              height={props.widthImage}
            />
          </div>
        )
     
}