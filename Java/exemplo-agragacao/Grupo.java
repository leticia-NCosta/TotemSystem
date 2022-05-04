import java.util.ArrayList;
import java.util.List;

public class Grupo {

    private String nome;
    private List<Contato> contatos;

    public Grupo(String nome){

        this.setNome(nome);
        this.contatos = new ArrayList();

    }

    public void adicionar(Contato contato){

        this.contatos.add(contato);

    }

    public void remover(Contato contato){

        this.contatos.remove(contato);

    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "Grupo{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
