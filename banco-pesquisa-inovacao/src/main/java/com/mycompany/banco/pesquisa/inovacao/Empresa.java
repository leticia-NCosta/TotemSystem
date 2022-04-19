
package com.mycompany.banco.pesquisa.inovacao;
public class Empresa {
    private Integer id;
    private String cnpj;
    private String razaoSocial;
    private String ruaEmpresa;
    private Integer numeroEmpresa;
    private  String complementoEmpresa;
    private  String telfoneEmpresa;
    private  String emailEmpresa;

    public Integer getId() {
        return id;
    }

    public Empresa(Integer id, String cnpj, String razaoSocial, String ruaEmpresa, Integer numeroEmpresa, String complementoEmpresa, String telfoneEmpresa, String emailEmpresa) {
        this.id = 0;
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.ruaEmpresa = ruaEmpresa;
        this.numeroEmpresa = 0;
        this.complementoEmpresa = complementoEmpresa;
        this.telfoneEmpresa = telfoneEmpresa;
        this.emailEmpresa = emailEmpresa;
    }

    public Empresa() {
    }

    
    public void setId(Integer id) {
        this.id = id;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getRuaEmpresa() {
        return ruaEmpresa;
    }

    public void setRuaEmpresa(String ruaEmpresa) {
        this.ruaEmpresa = ruaEmpresa;
    }

    public Integer getNumeroEmpresa() {
        return numeroEmpresa;
    }

    public void setNumeroEmpresa(Integer numeroEmpresa) {
        this.numeroEmpresa = numeroEmpresa;
    }

    public String getComplementoEmpresa() {
        return complementoEmpresa;
    }

    public void setComplementoEmpresa(String complementoEmpresa) {
        this.complementoEmpresa = complementoEmpresa;
    }

    public String getTelfoneEmpresa() {
        return telfoneEmpresa;
    }

    public void setTelfoneEmpresa(String telfoneEmpresa) {
        this.telfoneEmpresa = telfoneEmpresa;
    }

    public String getEmailEmpresa() {
        return emailEmpresa;
    }

    public void setEmailEmpresa(String emailEmpresa) {
        this.emailEmpresa = emailEmpresa;
    }

//    @Override
//    public String toString() {
//        return String.format("ID: %d"
//                            +"CNPJ: %s"
//                            +"Razão Social %s"
//                            +"Rua Empresa %s"
//                            + "", )
//                "Empresa{" + "id=" + id + ", cnpj=" + cnpj + ", razaoSocial=" + razaoSocial + ", ruaEmpresa=" + ruaEmpresa + ", numeroEmpresa=" + numeroEmpresa + ", complementoEmpresa=" + complementoEmpresa + ", telfoneEmpresa=" + telfoneEmpresa + ", emailEmpresa=" + emailEmpresa + '}';
//    }
    
    

}
 

