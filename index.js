let sort_filer_btn = document.querySelector(".sort-filter-btn");
let side_bar_sort = document.querySelector(".side-bar-sort");
let side_bar_filter = document.querySelector(".side-bar-filter");
let rightArrowSort = document.querySelector(".arrow-right-sort");
let rightArrowFilter = document.querySelector(".arrow-right-filter");
let leftArrowSort = document.querySelector(".arrow-left-sort");
let applyBtnSort = document.querySelector(".apply-btn-sort");
let leftArrowFilter = document.querySelector(".arrow-left-filter");
let applyBtnFilter = document.querySelector(".apply-btn-filter");
let checkBoxValue = document.querySelectorAll(".checkboxBtn");
let clearBtnFilter = document.querySelector(".clear-options-filter");
let radioBtnValue = document.querySelectorAll(".radioBtn");
let clearBtnSort = document.querySelector(".clear-options-sort");
let mainContainer = document.querySelector(".main-container");
let overlay = document.querySelector(".overlay");


let sortFlag = false;
let filterFlag = false;
let overlayFlag = false;

const disableBody = ()=>{
    // mainContainer.style.backgroundColor = "#c3c3c3";
    overlayFlag = !overlayFlag;
    if(overlayFlag){
        overlay.style.display = "initial";
    }
    else{
        overlay.style.display = "none";
    }
}

overlay.addEventListener("click",function(){
    // disableBody();
    (sortFlag)?toggleSort():toggleFilter();
})
clearBtnFilter.addEventListener("click",function(){
    console.log("clearBtnFilter clicked");
    for(let i=0;i<checkBoxValue.length;i++){
        checkBoxValue[i].checked = false;
    }
})
clearBtnSort.addEventListener("click",function(){
    console.log("clearBtnSort clicked");
    for(let i=0;i<radioBtnValue.length;i++){
        radioBtnValue[i].checked = false;
    }
})

const toggleSort = () => {
    sortFlag = !sortFlag;
    // filterFlag=false;
    if(sortFlag){
        disableBody();
        side_bar_sort.style.display = "initial";
    }
    else{
        disableBody();
        side_bar_sort.style.display = "none";
    }
}
const toggleFilter = () => {
    filterFlag = !filterFlag;
    // filterFlag=false;
    if(filterFlag){
        disableBody();
        side_bar_filter.style.display = "initial";
    }
    else{
        disableBody();
        side_bar_filter.style.display = "none";
    }
}

const toggleSortAndFilter = () => {
    console.log("right arrow clicked");
    filterFlag = !filterFlag;
    sortFlag = !sortFlag;
    if(filterFlag===true){
        side_bar_sort.style.display = "none";
        side_bar_filter.style.display = "initial";
    }
    else{
        side_bar_filter.style.display = "none";
        side_bar_sort.style.display = "initial";
    }
}

//sort/filter btn
sort_filer_btn.addEventListener("click", function(){
    console.log("button clicked");
    toggleSort();
    
});


leftArrowSort.addEventListener("click",function(){
    console.log("sidebarclicked");
    toggleSort();
})
leftArrowFilter.addEventListener("click",function(){
    console.log("sidebarclicked");
    toggleFilter();
})


rightArrowSort.addEventListener("click",function(){
    console.log("sort to filter");
    toggleSortAndFilter();
})
rightArrowFilter.addEventListener("click",function(){
    console.log("Filter to sort");
    toggleSortAndFilter();
})


applyBtnSort.addEventListener("click",function(){
    console.log("apply btn clicked of sort");
    toggleSort();
});
applyBtnFilter.addEventListener("click",function(){
    console.log("apply btn clicked of filter");

    toggleFilter();
});


// #c3c3c3