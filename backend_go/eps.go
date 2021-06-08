package main

type Person struct {

	codigo `json:"codigo,omitempty"`,
    entidad string `json:"entidad,omitempty"`,
    nit string `json:"nit,omitempty"`,
    regimen_codigo string `json:"regimen_codigo,omitempty"`,
    regimen_descripcion string `json:"regimen_descripcion,omitempty"`,
}