/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useClientSideRouting } from "$/utils/client_side_routing"
import NextHead from "next/head"



export function Div_bd4c022a8f796682aa6392e9d4c102e9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_9017984ada32ffa55f5d2870ebd3c887/>
</div>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_9017984ada32ffa55f5d2870ebd3c887 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export default function Component() {
  const reflex___state____state__personal_sp_portfolio___state___state____state__personal_sp_portfolio___state___state____state404 = useContext(StateContexts.reflex___state____state__personal_sp_portfolio___state___state____state__personal_sp_portfolio___state___state____state404)
  const ref_projects = useRef(null); refs["ref_projects"] = ref_projects;
  const ref_resume = useRef(null); refs["ref_resume"] = ref_resume;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const routeNotFound = useClientSideRouting()

  return (
    <Fragment>

<Fragment>

<Div_bd4c022a8f796682aa6392e9d4c102e9/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Fragment>

{isTrue(routeNotFound) ? (
  <Fragment>

<RadixThemesBox css={({ ["as"] : "main", ["pb"] : "8" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack navbar"} css={({ ["as"] : "nav", ["position"] : "fixed", ["top"] : "0px", ["bot"] : "20px", ["placeholder"] : "white", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["boxShadow"] : "5px 10px 20px rgba(0, 0, 0, 0.5)", ["border"] : "0 1px solid rgba(0, 0, 0, 0)", ["backdropFilter"] : "blur(50px)", ["padding"] : "1em", ["height"] : "3em", ["width"] : "100%", ["zIndex"] : "5", ["alignItems"] : "center", ["justifyContent"] : "center", ["alignContent"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginRight"] : "1em", ["color"] : "white", ["fontWeight"] : "semibold", ["textBorder"] : "2px solid black" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "min(5vw, 30px)" })}>

{"Matias Morcos"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["size"] : "3", ["fontWeight"] : "semibold", ["alignItems"] : "center", ["alignContent"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["color"] : "white", ["marginRight"] : "1em", ["textShadow"] : "2px 2px 2px white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

{"Home"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "white", ["fontWeight"] : "semibold", ["marginRight"] : "1em", ["textShadow"] : "2px 2px 2px white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#projects"} passHref={true}>

{"Projects"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "white", ["marginRight"] : "1em", ["textShadow"] : "2px 2px 2px white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#resume"} passHref={true}>

{"Resume"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["marginRight"] : "0.5em", ["maxWidth"] : "48px", ["width"] : "100%", ["maxHeight"] : "48px", ["height"] : "100%", ["align"] : "center", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={"_blank"}>

<NextLink href={"https://github.com/matimorcos"} passHref={true}>

<img css={({ ["radius"] : "full" })} src={"github.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["marginRight"] : "0.5em", ["maxWidth"] : "48px", ["width"] : "100%", ["maxHeight"] : "48px", ["height"] : "100%", ["align"] : "center", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={"_blank"}>

<NextLink href={"https://www.linkedin.com/in/matias-morcos-mm/"} passHref={true}>

<img css={({ ["radius"] : "full" })} src={"linkedin.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginLeft"] : "0.5em", ["marginRight"] : "0.5em", ["color"] : "white", ["fontWeight"] : "semibold", ["textBorder"] : "2px solid black" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "min(3vw, 16px)" })}>

{"morcosfariasm@gmail.com"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesContainer css={({ ["padding"] : "16px", ["maxW"] : "container.sm", ["pt"] : "20" })} size={"3"}>

<RadixThemesBox>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "60vh" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading>

{"404 - Not Found"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{"Oups, the page at "}
<RadixThemesCode>

{reflex___state____state__personal_sp_portfolio___state___state____state__personal_sp_portfolio___state___state____state404.origin_url}
</RadixThemesCode>
{" doesn't exist."}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesContainer css={({ ["padding"] : "16px", ["delay"] : "0.1", ["mt"] : "10", ["pt"] : "20", ["textColor"] : "white", ["align"] : "center" })} id={"projects"} ref={ref_projects} size={"3"}>

<RadixThemesBox css={({ ["mt"] : "5", ["align"] : "center" })}>

<RadixThemesHeading align={"center"} as={"h2"} css={({ ["color"] : "dark", ["variant"] : "projects", ["textDecorationThickness"] : "2.5px", ["fontWeight"] : "bold", ["pb"] : "2", ["marginTop"] : "40px !important" })} id={"projects"} ref={ref_projects} size={"7"}>

{"Projects"}
</RadixThemesHeading>
</RadixThemesBox>
</RadixThemesContainer>
<Carousel css={({ ["marginBottom"] : "20px", ["height"] : "400px", ["width"] : "100%", ["buttonPrevBorderRadius"] : "50%", ["buttonNextBorderRadius"] : "50%", ["showButtons"] : true, ["showIndicators"] : true, ["showStatus"] : true, ["showNavigation"] : true, ["showNavigationOnHover"] : true, ["showNavigationOnFocus"] : true, ["buttonPrevText"] : "Previous", ["buttonNextText"] : "Next", ["buttonPrevColor"] : "white", ["buttonNextColor"] : "white", ["buttonPrevBg"] : "blue", ["buttonNextBg"] : "blue", ["buttonPrevSize"] : "lg", ["buttonNextSize"] : "lg", ["buttonPrevTop"] : "10%", ["buttonNextTop"] : "10%", ["buttonPrevLeft"] : "10px", ["buttonNextRight"] : "10px" })}>

<img alt={"Project 1"} css={({ ["placeholder"] : "blur", ["width"] : "800px", ["maxWidth"] : "800px", ["height"] : "400px" })} src={"icl_ums_c1.jpg"}/>
<img alt={"Project 2"} css={({ ["placeholder"] : "blur", ["width"] : "800px", ["maxWidth"] : "800px", ["height"] : "400px" })} src={"icl_ums_c2.jpg"}/>
</Carousel>
<RadixThemesFlex>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "space-between", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesContainer css={({ ["padding"] : "16px", ["delay"] : "0.1", ["alignItems"] : "center", ["display"] : "flex", ["flexDirection"] : "column", ["justify"] : "center", ["width"] : "100%", ["height"] : "auto", ["fontSize"] : "17", ["marginLeft"] : "10%", ["justifyContent"] : "center", ["textColor"] : "white" })} id={"resume"} ref={ref_resume} size={"3"}>

<RadixThemesBox>

<RadixThemesHeading as={"h2"} css={({ ["fontSize"] : "2em", ["color"] : "dark", ["variant"] : "resume", ["textDecorationThickness"] : "2.5px", ["fontWeight"] : "bold", ["pb"] : "2", ["marginTop"] : "40px !important", ["marginBottom"] : "10px" })} id={"resume"} ref={ref_resume}>

{"Click the button below to download my resume."}
</RadixThemesHeading>
</RadixThemesBox>
<RadixThemesButton css={({ ["width"] : "15em", ["color"] : "white", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginLeft"] : "25%", ["backgroundColor"] : "rgba(100, 100, 100, 100)" })} onClick={((...args) => (addEvents([(Event("_download", ({ ["url"] : "/resume_wd.pdf", ["filename"] : "resume_wd.pdf" }), ({  })))], args, ({  }))))}>

{"Download Resume PDF"}
</RadixThemesButton>
</RadixThemesContainer>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["align"] : "center", ["justify"] : "center", ["marginTop"] : "60px", ["justifySelf"] : "center", ["alignSelf"] : "center", ["marginLeft"] : "50%", ["height"] : "auto", ["padding"] : "1em", ["width"] : "100%" })}>

<RadixThemesText as={"p"}>

{"Developed by Matias Morcos. All rights reserved. \u00a9 2024"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesContainer>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment>


</Fragment>
)}
</Fragment>
<NextHead>

<title>

{"Page Not Found"}
</title>
<meta content={"The page was not found"} name={"description"}/>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
