

function openModalWindow(){
    let modalWin = document.getElementById('myModal');
    let closeX = document.getElementById('closeX');
    modalWin.style.opacity = '1';
    modalWin.style['pointer-events'] = 'auto';
    modalWin.style['z-index'] = '1';
    closeX.style.cursor = 'pointer';
    // alert('Это модальное окно\n\
    // Вы можете помочь природе перечислив сумму через СБП на тел.+7(916)116-19-18.\
    // \nОгромное Вам спасибо за посильный вклад!\
    // \nВместе мы победим!');
};
function closeModalWin(){
    let closeX = document.getElementById('closeX');
    let modalWin = document.getElementById('myModal');
    modalWin.style.opacity = '0';
    modalWin.style['pointer-events'] = 'none';
    closeX.style.cursor = 'default';
    modalWin.style['z-index'] = '-1';
}