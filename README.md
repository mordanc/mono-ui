This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Description

A composable, dark themed UI Framework specifically designed to work with TailwindCSS.

## Usage

Use the MonoApp component to build a full page UI, or use other components individually.
The MonoApp component allows you to hotswap parts of your UI in its grid system. Hide the
sidebars/topbar behind a flag to toggle them on/off, and MonoApp will scale accordingly

contentPanes represents an array of items you want to display in the main area of your viewport. Their inteface
requires colSpan and content, with an optional header.

Specify mainContentColumns of the MonoApp and the colSpan of your main content items to dynamically resize
your app.

## Example:

```
<MonoApp
    rightSidebar={<SidebarRight />}
    leftSidebar={<SidebarLeft />}
    topbar={<Topbar />}
    contentPanes={screenToShow}
    mainContentColumns={3}
    frames={false}
/>
```

All components have an `additionalStyles` prop which lets you add styles to their wrapper div.
