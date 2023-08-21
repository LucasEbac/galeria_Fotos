$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();

})

$('#botao-cancelar').click(function() {
    $('form').slideUp();
})
$('form').on("submit", function(e){
    e.preventDefault();
    const enderecoNovaimagem = $('endereco-imagem-nova').val();
    const novoItem = $('<li><li/>');
    $(`<img src="${enderecoNovaimagem}" />`).appendTo(novoItem);
    $(`
            <div class="overlay-imagem-link"> 
            <a href="${enderecoNovaimagem}" target="blank" title="ver imagem em tamanho real"   
            ver imagem em tamanho real 
            </a>
            </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('endereco-imagem-nova').val('')
})
})