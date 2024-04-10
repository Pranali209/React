export default function FancyText({text ,title}) {
    return title ? <h1>{title}</h1> : <h2><i>{text}</i></h2>
}