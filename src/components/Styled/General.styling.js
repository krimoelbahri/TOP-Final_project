import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
#root, article, div, footer, header, main, nav, section {
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
}
html,body,#root {
	width: 100%;
	height: 100%;
}
#root {
    display: unset;
}

body,
button,
input,
textarea {
	color: #262626;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
		Arial, sans-serif;
	font-size: 14px;
	line-height: 18px;
}

body {
	background-color: #fafafa;
	display: flex;
}
.logo {
	font-family: "instagram new";
	font-size: xxx-large;
	font-weight: unset;
}
.header-logo {
	font-family: "instagram new";
	font-size:x-large;
	font-weight: unset;
}
.header-icons {
	font-size: 21px;;
}
`;

export default GlobalStyling;
