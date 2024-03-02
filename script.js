// FAQ sathi
document.addEventListener("DOMContentLoaded", () => {
  const faqCont = document.querySelector(".faq-content");

  faqCont.addEventListener("click", (e) => {
    const grpHead = e.target.closest(".faq-grp-header");
    if (!grpHead) {
      return;
    }
    const group = grpHead.parentElement;
    const groupBody = group.querySelector(".faq-grp-body");
    const icon = grpHead.querySelector("i");
    // toggling +-
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggling content
    groupBody.classList.toggle("open");

    // Close other accordians
    const othergrps = faqCont.querySelectorAll(".faq-group");

    othergrps.forEach((item) => {
      if (item !== group) {
        const othergrpbody = item.querySelector(".faq-grp-body");
        const otherIcon = item.querySelector(".faq-grp-header i");

        othergrpbody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
