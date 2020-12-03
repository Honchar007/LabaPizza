class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementById('mainReccomend');
        rootNode.innerHTML = view;
    }
    async loader() {
        const rootNode = document.body;
        const arch = rootNode.innerHTML;
        rootNode.innerHTML = `<div style='left:50%;top:50%;background-color=black;' class="overlay"></div>
      <div class="preloader"></div> `;
        setTimeout(function() { rootNode.innerHTML = arch; }, 1000);
    }
}

export default TemplateProcessor;