import java.util.List;

import com.github.britooo.looca.api.core.Looca;

public class Totem {

    Looca looca = new Looca();
    Sistema sistema = new Sistema();

    private Integer id;
    private String localizacao;
    private String modelo;
    private String marca;
    private String dataInicializacao;
    private String arquitetura;
    private String tempoAtividade;
    private String tipoProcessador;

    public Totem(){

    }

    public Totem(Integer id, String localizacao){

        this.setId(id);
        this.setLocalizacao(localizacao);

    }

    public void processos(){

        List listaProcessos = looca.getGrupoDeProcessos().getProcessos();

        for(int i = 0; i < listaProcessos.size(); i++){
            sistema.setLinhas("-", 30);
            System.out.println(listaProcessos.get(i));
        }

    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }

    public void setDataInicializacao(String dataInicializacao) {
        this.dataInicializacao = dataInicializacao;
    }

    public String getDataInicializacao() {
        return dataInicializacao;
    }

    public void setArquitetura(String arquitetura) {
        this.arquitetura = arquitetura;
    }

    public String getArquitetura() {
        return arquitetura;
    }

    public void setTempoAtividade(String tempoAtividade) {
        this.tempoAtividade = tempoAtividade;
    }

    public String getTempoAtividade() {
        return tempoAtividade;
    }

    public void setTipoProcessador(String tipoProcessador) {
        this.tipoProcessador = tipoProcessador;
    }

    public String getTipoProcessador() {
        return tipoProcessador;
    }


}
