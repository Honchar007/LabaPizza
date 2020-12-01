class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementById('mainReccomend');
        rootNode.innerHTML = view;
    }
    async loader()
    {
        const rootNode = document.body;
        const arch = rootNode.innerHTML;
        rootNode.innerHTML = `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div ><div style='left:50%;top:50%; ' class="overlay"></div>
      <div class="preloader"></div> `;
      setTimeout(function(){rootNode.innerHTML = arch;},2000);
    }
}

export default TemplateProcessor;
