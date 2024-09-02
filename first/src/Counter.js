import "./Counter.css"
function Count(){
    let count = 0;
    return(
        <>
        
    <button id='counts' onClick={
        () => {
            count++;
            document.getElementById('counts').innerHTML = count;
            }
    }>0</button>
        </>
    )
}
export default Count