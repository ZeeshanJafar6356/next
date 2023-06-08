import Image from 'next/image';
import { robotomono } from './fonts';
import Picture from '../assets/mobile.jpg';
const home = () => {
  return (
    // <div
    //   style={{
    //     fontSize: '30px',
    //     color: 'red',
    //     textAlign: 'center',
    //   }}
    // >
    //   Home Page
    // </div>
    <>
      {/* <h1>Home Page</h1> */}
      <div className="body">
        <p className={robotomono.className}>Welcome To NextJs Home Page</p>
        {/* <Image src="/nextjs.png" layout="fill"></Image> */}
        {/* <Image src="/nextjs.png" width="500" height={'300'} alt=""></Image> */}

        <Image
          src="https://www.syncfusion.com/blogs/wp-content/uploads/2022/09/Optimize-NextJS-App-bundle-performance.png"
          layout="responsive"
          width="500"
          height="300"
          alt="homeImage"
        ></Image>
        <br></br>
        <Image layout="responsive" src={Picture} alt="mobile"></Image>
        <style jsx>
          {`
            h1 {
              color: red;
              font-size: 20px;
              text-align: center;
            }
            .welcome {
              color: green;
              font-size: 40px;
              font-weight: bold;
              text-align: center;
            }
            .body {
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default home;
