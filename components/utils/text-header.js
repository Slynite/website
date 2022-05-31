export default function TextHeader({ text, size }) {
    return(
        <h1 className={`${size} bebasNeue text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary inline-block`}>{text}</h1>
    )
}