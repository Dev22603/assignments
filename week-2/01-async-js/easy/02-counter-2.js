function counter(time){
    for (let i = time; i >=0; i--) {
        setTimeout(function () {
            console.log(i);
        },1000*(time-i));
    }
}
counter(10); 

function countWithoutInterval(count) {
    setTimeout(() => {
        console.log(count++);
        countWithoutInterval(count);
    }, 1000);
}

countWithoutInterval(1)

