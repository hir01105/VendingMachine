class Beverage{
    constructor(name, price, picUrl){
        this.name = name;
        this.price = price;
        this.picUrl = picUrl;
    }
}

const drinks = [
    new Beverage("純水", 250, "https://1.bp.blogspot.com/-sfGNoGHaZ3Y/XQNupGVn-QI/AAAAAAABTJw/jio9taChsB45FUZbYh3Re8EdG0t9o-7nwCLcBGAs/s800/science_junsui.png"),
    new Beverage("ガソリン", 80, "https://2.bp.blogspot.com/-kHHLF5kDxFE/VpjCajzCy3I/AAAAAAAA2_w/aYcMEg9VE9s/s800/drum_can.png"),
    new Beverage("毒", 1000, "https://3.bp.blogspot.com/-uRKjMwOu_9s/VUIJy9jYRYI/AAAAAAAAtZY/RN62S4gZB_M/s800/medical_doku.png"),
    new Beverage("水素水", 500, "https://2.bp.blogspot.com/-zsRCpF551Ho/VzRt6bZBcSI/AAAAAAAA6mo/H55sekUuY8EE_3hJab7DfZhEsp6rbOcvwCLcB/s800/water_bottle_suisosui.png"),
    new Beverage("コーラ", 150, "https://1.bp.blogspot.com/-3wo33nLxIKw/X1LskM84NQI/AAAAAAABa_I/D7QLbbJYqOsyI26PwlE23Dl6Dy-CzM8rQCNcBGAsYHQ/s1600/drink_cola_petbottle.png"),
    new Beverage("エタノール", 300, "https://1.bp.blogspot.com/-7P-VVFvsHqQ/XlRy5zvUBpI/AAAAAAABXbg/GtxOqQnVhYwRF7k7pXnEZAVLgtPVYtKaACNcBGAsYHQ/s1600/science_ethanol_e.png"),
    new Beverage("池の水", 20, "https://2.bp.blogspot.com/-J3MxFWPBrjA/U-8GZg7jtmI/AAAAAAAAk4Q/w_Kq_SFuvx0/s800/ike.png"),
    new Beverage("エナジードリンク", 150, "https://1.bp.blogspot.com/-Fi802Y8pp_s/XQjt-o21FmI/AAAAAAABTOY/r2Sd6KJgJSw254ba0u8luyNTq99j1dV0ACLcBGAs/s800/drink_energy_can.png"),
    new Beverage("ウォッカ", 600, "https://4.bp.blogspot.com/-SHUI5uyOJ7E/V9ppbe1kT2I/AAAAAAAA9pw/LdB_FRDtCSEjlz07XVPbKWIuiRaTe9cRwCLcB/s800/drink_vodka.png")
]


function changeSlide(indexNum){
    
    let currentIndex = main.getAttribute("data-index");
    if(currentIndex == "-1"){
        main.classList.remove("col-12", "d-flex", "flex-column", "justify-content-center", "align-items-center", "first-screen-animation");
        
    }
    
    if(indexNum.toString() === currentIndex){
        return;
    }
    let currentDiv = document.querySelectorAll("#main div").item(0);
    let nextDiv = document.createElement("div");
    nextDiv.classList.add("d-flex", "justify-content-center", "align-items-center", "containerDiv");
    let picHtml = `<img class="col-10 drinkImage" src=${drinks[indexNum].picUrl}>`;
    nextDiv.innerHTML = picHtml;

    changeProduct(indexNum);

    if (parseInt(currentIndex) < indexNum) {
        animateMain(currentDiv, nextDiv, "right");
    } else{
        animateMain(currentDiv, nextDiv, "left");
    }
    main.setAttribute("data-index", indexNum.toString());

    
}

//change descriptions of products under the screen
function changeProduct(index) {
    const pName = document.getElementById("productName");
    const pPrice = document.getElementById("productPrice");
    pName.innerHTML = "商品名: " + drinks[index].name;
    pPrice.innerHTML = "商品価格: ¥" + drinks[index].price;

}

//add animation class to div
function animateMain(currentDisplay, nextDisplay, direction){
    main.innerHTML = "";
    main.append(nextDisplay);

    extra.innerHTML = "";
    if (currentDisplay != null) {
        extra.append(currentDisplay);
    }

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    if (direction === "right"){
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    } else if (direction === "left"){
        sliderShow.innerHTML = "";
        sliderShow.append(main);
        sliderShow.append(extra);
    }
}

let sliderShow = document.getElementById("sliderScreen");
let main = document.createElement("div");

main.setAttribute("data-index", "-1");
main.id = "main";
main.classList.add("col-12", "d-flex", "flex-column", "justify-content-center", "align-items-center", "first-screen-animation");
main.innerHTML = 
`
<h3>いらっしゃいませ</h3>
<p>お好きな飲み物を番号でお選びください。</p>
`;


let extra = document.createElement("div");
extra.id = "extra";
sliderShow.append(main, extra);

//create buttons
let buttonDiv = document.getElementById("buttons");
for(let i=0;i < drinks.length;i++){
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-light", "col-3", "m-1");
    btn.innerHTML = (i+1).toString();
    btn.setAttribute("data-index", i.toString());
    btn.addEventListener("click", function(){
        changeSlide(i);
    })
    buttonDiv.append(btn);
}