/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import Typewriter from "typewriter-effect"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import NextHead from "next/head"



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

export function Errorboundary_a2d73045d3bc80aa19c90b06a79342d3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_wave = useRef(null); refs["ref_wave"] = ref_wave;
  const ref_projects = useRef(null); refs["ref_projects"] = ref_projects;
  const ref_resume = useRef(null); refs["ref_resume"] = ref_resume;

  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])


  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))) }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_bd4c022a8f796682aa6392e9d4c102e9/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
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

<RadixThemesBox css={({ ["backgroundImage"] : "url('whitebg.jpg')", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["backgroundAttachment"] : "fixed", ["width"] : "100%", ["height"] : "100%", ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["zIndex"] : "-1" })}/>
<RadixThemesContainer css={({ ["padding"] : "16px", ["delay"] : "0.1", ["pt"] : "10" })} size={"3"}>

<RadixThemesBox css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "space-between", ["width"] : "100%", ["marginTop"] : "10px !important", ["height"] : "100vh" })}>

<RadixThemesBox css={({ ["alignItems"] : "flex-start", ["display"] : "flex", ["flexDirection"] : "column", ["justify"] : "flex-start", ["width"] : "60%", ["marginLeft"] : "75px", ["marginBottom"] : "27px" })}>

<RadixThemesHeading as={"h1"} css={({ ["variant"] : "section-title", ["marginTop"] : "1", ["color"] : "dark", ["fontFamily"] : "sans-serif", ["--default-font-family"] : "sans-serif", ["textShadow"] : "2px 2px 2px white", ["marginBottom"] : "1" })} size={"7"}>

{"Hey!, "}
<RadixThemesText as={"p"} id={"wave"} ref={ref_wave} role={"img"}>

{"\ud83d\udc4b\ud83c\udffb"}
</RadixThemesText>
{"Welcome to my portfolio!"}
</RadixThemesHeading>
<RadixThemesBox>

<RadixThemesHeading as={"h1"} css={({ ["marginTop"] : "10px", ["marginBottom"] : "10px", ["variant"] : "section-title", ["pr"] : "5", ["color"] : "dark", ["textShadow"] : "2px 2px 2px white" })} size={"7"}>

{"My name is Matias Morcos,"}
<RadixThemesText as={"p"} css={({ ["color"] : "dark" })}>

{"and I am a Python web developer"}
</RadixThemesText>
</RadixThemesHeading>
</RadixThemesBox>
<RadixThemesHeading as={"h1"} css={({ ["variant"] : "section-title", ["color"] : "dark", ["textShadow"] : "4px 8px 10px white", ["marginTop"] : "10px", ["marginBottom"] : "10px" })} size={"7"}>

<Typewriter options={({ ["strings"] : ["<span style=\"color:darkred;\">Designing</span>", "<span style=\"color:darkblue;\">Developing</span>", "<span style=\"color:darkgreen;\">Implementing</span>"], ["autoStart"] : true, ["loop"] : true, ["deleteSpeed"] : 50 })}/>
<RadixThemesText as={"p"} css={({ ["color"] : "dark" })}>

{"Software Solutions"}
</RadixThemesText>
</RadixThemesHeading>
<RadixThemesBox>

<RadixThemesHeading as={"h1"} css={({ ["variant"] : "section-title", ["pr"] : "5", ["color"] : "dark", ["textShadow"] : "2px 2px 2px white", ["marginTop"] : "10px", ["marginBottom"] : "10px" })} size={"7"}>

<Typewriter options={({ ["strings"] : ["<span style=\"color:darkred;\">Using</span>", "<span style=\"color:darkblue;\">Researching about</span>", "<span style=\"color:darkgreen;\">Continuously learning</span>"], ["autoStart"] : true, ["loop"] : true, ["deleteSpeed"] : 50 })}/>
<RadixThemesText as={"p"} css={({ ["color"] : "dark" })}>

{"Python, Django, Flask, FastAPI as main stack! You can check my projects below."}
</RadixThemesText>
</RadixThemesHeading>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["display"] : "flex", ["justify"] : "center", ["align"] : "center", ["width"] : "30%", ["height"] : "auto" })}>

<img alt={"Profile Image"} css={({ ["borderRadius"] : "100%", ["border"] : "2px solid white", ["width"] : "225px", ["height"] : "220px" })} src={"profile_photo.JPG"}/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesContainer>
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
<Button_d0940c0707cccfc3bd06970dd3d4b046/>
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
<NextHead>

<title>

{"Matias Morcos Portfolio"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

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

export function Button_d0940c0707cccfc3bd06970dd3d4b046 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_ce03b0b532915422a9e48377392744dd = useCallback(((...args) => (addEvents([(Event("_download", ({ ["url"] : "/resume_wd.pdf", ["filename"] : "resume_wd.pdf" }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["width"] : "15em", ["color"] : "white", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginLeft"] : "25%", ["backgroundColor"] : "rgba(100, 100, 100, 100)" })} onClick={on_click_ce03b0b532915422a9e48377392744dd}>

{"Download Resume PDF"}
</RadixThemesButton>
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

  return (
    <Errorboundary_a2d73045d3bc80aa19c90b06a79342d3/>
  )
}
