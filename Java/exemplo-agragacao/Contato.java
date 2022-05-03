public class Contato {

    private String nome;
    private String telefone;
    private Boolean bloqueado;

    public Contato(String nome, String telefone, Boolean bloqueado){

        this.setNome(nome);
        this.setTelefone(telefone);
        this.setBloqueado(bloqueado);

    }

    public void bloquar(){
        this.bloqueado = true;
    }

    public void desbloquear(){
        this.bloqueado = false;

    }

    public Boolean getBloqueado() {
        return bloqueado;
    }

    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setBloqueado(Boolean bloqueado) {
        this.bloqueado = bloqueado;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "Contato{" +
                "nome='" + nome + '\'' +
                ", telefone='" + telefone + '\'' +
                ", bloqueado=" + bloqueado +
                '}';
    }
}
