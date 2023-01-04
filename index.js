let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {

    // Bump active Index

    const nextIndex = activeIndex + 1 
                    <= groups.length - 1
                    ? activeIndex + 1 
                    : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //  active group becomes after

    currentGroup.dataset.status = "after";

    // next group becomes active

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;

    })

}

const handleHateClick = () => {

    // Bump active Index

    const nextIndex = activeIndex - 1 
                    >= 0  
                    ? activeIndex - 1 
                    : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`)

    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //  active group becomes before

    currentGroup.dataset.status = "before";

    // next group becomes active

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;

    })

}