class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementById('mainReccomend');
        rootNode.innerHTML = view;
    }
}

export default TemplateProcessor;
