

function Article({title, date = "January 1, 1970", preview, minutes}) {
    let emojiTally
    let minuteCount5
    let minuteCount10
    
    minuteCount5 = Math.round(minutes/5)
    minuteCount10 = Math.round(minutes/10)
    
    if (minutes < 30) {emojiTally = "☕️".repeat(minuteCount5)}
    if (minutes > 30) {emojiTally = "🍱".repeat(minuteCount10)}

    

    return (
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small> - {emojiTally} {minutes} min read</small>
        <p>{preview}</p>
        </article>
    )
}

export default Article