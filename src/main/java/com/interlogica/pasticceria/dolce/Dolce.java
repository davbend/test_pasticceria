package com.interlogica.pasticceria.dolce;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Dolce {

    @Id
    @SequenceGenerator(
            name = "dolce_sequence",
            sequenceName = "dolce_sequence",
            allocationSize = 1

    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dolce_sequence"
    )
    @JsonProperty("id")
    private Long id;
    private String nome;
    private String data;

    private Float prezzo;
    private String ingredienti;

    public Dolce() {
    }

    public Dolce(String nome, String data, Float prezzo, String ingredienti) {
        this.nome = nome;
        this.data = data;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Float getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(Float prezzo) {
        this.prezzo = prezzo;
    }

    public String getIngredienti() {
        return ingredienti;
    }

    public void setIngredienti(String ingredienti) {
        this.ingredienti = ingredienti;
    }

    @Override
    public String toString() {
        return "Dolce{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", data='" + data + '\'' +
                ", prezzo=" + prezzo +
                ", ingredienti='" + ingredienti + '\'' +
                '}';
    }
}
