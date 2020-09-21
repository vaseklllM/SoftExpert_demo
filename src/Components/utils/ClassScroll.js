export default class Scroll {
    constructor(scroll,block){
        this.scroll = scroll
        this.block = block
        this.checket = this.check()
        this.scrollElement = this.scroll.querySelector('div')
    }

    push(){
        this.scrollElement.addEventListener('mousedown',(event)=>{
            let scrollRowWidth = this.scroll.clientWidth
            let elemnetPaddingLeftProcent = this.scrollElement.style.marginLeft === '' ? 0 : parseFloat(this.scrollElement.style.marginLeft)
            let elemnetPaddingLeft = this.NumberFromProcent(elemnetPaddingLeftProcent,scrollRowWidth)
            let elemenWidth = this.scrollElement.clientWidth
            let mousePaddingLeft = event.clientX - elemnetPaddingLeft
            document.onmousemove = (e)=>{
                let leftIndentProcent = this.scrollRowFunction(e, mousePaddingLeft, scrollRowWidth, elemenWidth, this.scrollElement)
                this.ScrollGalerry(this.block,leftIndentProcent)
                document.body.style.userSelect = 'none'
            }
            
            document.onmouseup = ()=>{
                document.onmousemove = ()=>{
                    return
                }
                document.body.style.userSelect = 'auto'
            }
        })
        this.block.addEventListener('mousedown',(event)=>{
            let blockWidth = this.block.clientWidth
            let blockPaddingLeft = parseInt(this.block.style.left)
            if(isNaN(blockPaddingLeft)){
                blockPaddingLeft = 0;
            }
            let mousePaddingLeft = event.clientX - blockPaddingLeft
            let scrollRowWidth = this.scroll.clientWidth
            let elementWidth = this.scrollElement.clientWidth
            document.onmousemove = (event)=>{
                let PaddingLeftProcent = this.scrollBlockFunction(event,mousePaddingLeft,blockWidth)
                this.scrollRow( this.scrollElement, elementWidth,scrollRowWidth, PaddingLeftProcent)
                document.body.style.userSelect = 'none'
            }
    
            document.onmouseup = ()=>{
                document.onmousemove = ()=>{
                    return
                }
                document.body.style.userSelect = 'auto'
            }
        })
    }

    scrollRow(element, elementWidth, scrollRowWidth, procent){ // функция скролит внутренный блок скролла на уазаный процент
        let miniScrollRow = scrollRowWidth - elementWidth
        let left = this.NumberFromProcent(procent, miniScrollRow)
        let leftProcent = this.ProcentFromNumber(left, scrollRowWidth)
        element.style.marginLeft = leftProcent + '%'
    }
    scrollBlockFunction(event,mousePaddingLeft, blockWidth){ // функция скролла блока, повертает проскроленный процент
        let mousePositionX = event.x - mousePaddingLeft
        if (mousePositionX > 0){
            mousePositionX = 0
        } 
        else if(mousePositionX <  ((blockWidth - window.innerWidth) * -1)){
            mousePositionX =  ((blockWidth - window.innerWidth) * -1)
        }
        this.block.style.left = mousePositionX + 'px'
        return Math.abs(this.ProcentFromNumber(mousePositionX,blockWidth - window.innerWidth))
    }

    ScrollGalerry(galerry, procent){ // функция скролит галерею на уазаный процент
        let GalerryWidth = galerry.clientWidth
        GalerryWidth -= window.innerWidth
        let left = this.NumberFromProcent(procent, GalerryWidth)
        left = left * (-1)
        galerry.style.left = left + 'px'
    }
    scrollRowFunction(event,mousePaddingLeft, ScrollRowWidth, elemenWidth, element){ // функция скролла, повертает проскроленный процент
        let mousePositionX = event.x - mousePaddingLeft
        if(mousePositionX > ScrollRowWidth - elemenWidth){
            mousePositionX = ScrollRowWidth - elemenWidth
        } else if (mousePositionX < 0){
            mousePositionX = 0
        }
        let marginLeft = this.ProcentFromNumber(mousePositionX,ScrollRowWidth)
        element.style.marginLeft = marginLeft + '%'
        return this.ProcentFromNumber(marginLeft,Math.abs(this.ProcentFromNumber(elemenWidth,ScrollRowWidth)-100))
    }
    ProcentFromNumber(x, y){ // Сколько % составляет число x от числа y
        return (100/y)*x
    }
    NumberFromProcent(x, y){ // Сколько составляет x % от числа y
        return (x / 100)*y
    }
    check(){
        if(typeof(this.scroll) !== 'object'){
            console.error(`error: scroll is ${this.scroll}`);
            return false
        } else if(typeof(this.block) !== 'object'){
            console.error(`error: block is ${this.block}`);
            return false
        } else {
            return true
        }
    }
}