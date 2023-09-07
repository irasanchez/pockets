import * as React from "react"
import Layout from "./Layout"
import Typography from "@mui/joy/Typography"
import Box from "@mui/joy/Box"
export default function ErrorPage() {
  return (
    <Layout>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "primary",
      }}
      >
       <Typography level="h2">
      Oops. 😅
       </Typography> 
       <Typography level="h3">
        Something went wrong. 
       </Typography> 
       <Typography level="p">
         Please hit me up in the help chat if you need help. 
       </Typography> 
      <p>
      </p>
    </Box>
      </Layout>
  )
}