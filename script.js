function enviar() {
    const form = document.querySelector('.form');
    const tableBody = document.querySelector('#res');
    const saldoZero = document.querySelector('.valor');
    let saldo = 0;


    function submit(evento) {
        evento.preventDefault();

        const tipo = form.querySelector("#tipo").value;
        const ativo = form.querySelector("#ativo").value;
        let cotas = parseFloat(form.querySelector("#cotas").value);
        const valor = parseFloat(form.querySelector("#valor").value);

        if (isNaN(cotas)) {
            cotas = 1;
        }

        console.log(cotas);
        const valorTotal = (valor * cotas);
        saldo += valorTotal;



        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${tipo}</td>
            <td>${ativo}</td>
            <td>${cotas}</td>
            <td>R$${valor.toFixed(2)}</td>
            <td>R$${valorTotal.toFixed(2)}</td>
        `;
        tableBody.appendChild(newRow);

        $(function () {
            $('#modalExemplo').modal('toggle');
        });
        form.reset();
        saldoZero.innerHTML = `R$${saldo.toFixed(2)}`;



        //     // Salvar dados no localStorage
        //     const dados = {
        //         saldo,
        //         itens: Array.from(tableBody.children).map(row => ({
        //           tipo: row.children[0].textContent,
        //           ativo: row.children[1].textContent,
        //           cotas: parseFloat(row.children[2].textContent),
        //           valor: parseFloat(row.children[3].textContent.substring(2)),
        //           valorTotal: parseFloat(row.children[4].textContent.substring(2))
        //         }))
        //       };
        //       localStorage.setItem('dados', JSON.stringify(dados));
        //     }

        //     form.addEventListener('submit', submit);

        //     // Carregar dados do localStorage ao carregar a página
        //     document.addEventListener('DOMContentLoaded', () => {
        //       const dadosSalvos = localStorage.getItem('dados');
        //       if (dadosSalvos) {
        //         const dados = JSON.parse(dadosSalvos);
        //         saldo = dados.saldo;
        //         saldoZero.innerHTML = `R$${saldo.toFixed(2)}`;
        //         for (const item of dados.itens) {
        //           const newRow = document.createElement("tr");
        //           newRow.innerHTML = `
        //               <td>${item.tipo}</td>
        //               <td>${item.ativo}</td>
        //               <td>${item.cotas}</td>
        //               <td>R$${item.valor.toFixed(2)}</td>
        //               <td>R$${item.valorTotal.toFixed(2)}</td>
        //           `;
        //           tableBody.appendChild(newRow);
        //         }
        //       }
        // });
    }
    form.addEventListener('submit', submit);

}

enviar();