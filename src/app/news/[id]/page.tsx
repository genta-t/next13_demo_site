import React from "react";
import { news, newsArray } from "@/app/components/items/data";
import { Box } from "@mui/material";
import BoxTypo from "@/app/components/items/BoxTypo";
import Header from "@/app/components/Header";
import Image from "next/image";
import SectionMb from "@/app/components/items/SectionMb";
import CustomButton from "@/app/components/items/CustomButton";

// export const generateStaticParams = () => {
//   return news;
// }

// const NewsDetail = ({ params } : { params: { id: string } }) => {
//   const { id: idParams } = params;
//   const item = news.find((i) => i.id === idParams);

//   if (!item) {
//     return <div>ニュースが見つかりません</div>;
//   }

//   return (
//     <>
//       <Header />
//       <Box mt="200px">
//         <Box width="90%" maxWidth="1000px" m="auto">
//           <Box textAlign="right" mb="40px">
//             <Box 
//               display="inline-block"
//               bgcolor="#FFFFFF"
//               p={{ xs: "8px 16px", md: "8px 24px" }}
//               borderRadius="0.4em"
//             >
//               <BoxTypo
//                 ff="Inter"
//                 fs="S"
//                 lh="150%"
//                 color="black"
//               >
//                 2023.11.11
//               </BoxTypo>
//             </Box>
//           </Box>
//           <Box textAlign="justify">
//             <Box mb={{ xs: "32px", md: "56px"}}>
//               <BoxTypo
//                 ff="Notosans"
//                 fs="M"
//                 lh="150%"
//               >
//                 {item.title}
//               </BoxTypo>
//             </Box>
//             <Box border="0.5px solid rgba(255, 255, 255, 0.3)" mb="80px"/>
//             <Box mb={{ xs: "40px", md: "80px"}}>
//               {item.image ? (
//                 <Box width="100%">
//                   <Image src={`/images/${item.image}.png`} layout="responsive" width={100} height={100} objectFit="cover" alt="" />
//                 </Box>
//               ): (
//                 <></>
//               )}
//             </Box>
//             <BoxTypo
//               ff="Notosans"
//               fs="P"
//               lh="150%"
//             >
//               {item.description}
//             </BoxTypo>
//             <SectionMb />
//             <Box textAlign="center">
//               <CustomButton
//                 text={"ホーム"}
//                 href={"/"}
//                 isTarget={false}
//               />
//             </Box>
//             <SectionMb />
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default NewsDetail;

export const generateStaticParams = () => {
  return newsArray;
}

const NewsDetail = ({ params } : { params: { id: string } }) => {
  const { id: idParams } = params;
  const item = newsArray.find((i) => i.id === idParams);

  if (!item) {
    return <div>ニュースが見つかりません</div>;
  }

  return (
    <>
      <Header />
      <Box mt="200px">
        <Box width="90%" maxWidth="1000px" m="auto">
          <Box textAlign="right" mb="40px">
            <Box 
              display="inline-block"
              bgcolor="#FFFFFF"
              p={{ xs: "8px 16px", md: "8px 24px" }}
              borderRadius="0.4em"
            >
              <BoxTypo
                ff="Inter"
                fs="S"
                lh="150%"
                color="black"
              >
                2023.11.11
              </BoxTypo>
            </Box>
          </Box>
          <Box textAlign="justify">
            <Box mb={{ xs: "32px", md: "56px"}}>
              <BoxTypo
                ff="Notosans"
                fs="M"
                lh="150%"
              >
                {item.title}
              </BoxTypo>
            </Box>
            <Box border="0.5px solid rgba(255, 255, 255, 0.3)" mb="80px"/>
            {item.details.map((d,i) => {
              return(
                <>
                  <Box mb={{ xs: "40px", md: "80px"}}>
                    {d.image ? (
                      <Box width="100%">
                        <Image src={`/images/${d.image}.png`} layout="responsive" width={100} height={100} objectFit="cover" alt="" />
                      </Box>
                    ): (
                      <></>
                    )}
                  </Box>
                  <BoxTypo
                    ff="Notosans"
                    fs="P"
                    lh="150%"
                  >
                    {d.description}
                  </BoxTypo>
                  <SectionMb />
                </>
              )
            })}
            <Box textAlign="center">
              <CustomButton
                text={"ホーム"}
                href={"/"}
                isTarget={false}
              />
            </Box>
            <SectionMb />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsDetail;