// ? class & constructor

class CreatePencils{
    constructor(name,company,price,color){
        this.name = name;
        this.compony = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
    earase(){
        document.querySelectorAll("h1").forEach((elem)=>{
            if(elem.style.color === this.color)
            {
                elem.remove();
            }
        })
    }
}

let p1 = new CreatePencils("apsara","Apsara",20,"red");
let p2 = new CreatePencils("natraj","Natraj",30,"blue");