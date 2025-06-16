async function a(){
    console.log('a start');
    //await new Promise(resolve=>setTimeout(resolve,100))
    console.log('a end')

}
function b(){
    console.log('b start')
    console.log('b end')
}
a();
b();

//