-- la linea para crear la bd se declara en el docker
-- CREATE DATABASE cloud;

CREATE TABLE IF NOT EXISTS public.localizacion
(
    id_localizacion SERIAL PRIMARY KEY,
    latitud double precision,
    longitud double precision,
    descripcion character varying(20) COLLATE pg_catalog."default"
);

CREATE TABLE IF NOT EXISTS public.sensores
(
    id_sensor SERIAL PRIMARY KEY,
    num_serie integer,
    estado character varying(20) COLLATE pg_catalog."default"
);

CREATE TABLE IF NOT EXISTS public.lecturas
(
    id_lectura SERIAL PRIMARY KEY,
    calculo integer,
    pm25 integer,
    pm10 integer,
    ozono_tros integer,
    dioxido_nitro integer,
    dioxido_azufre integer,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_sensor integer,
    id_localizacion integer,
    CONSTRAINT loc_foranea FOREIGN KEY (id_localizacion)
        REFERENCES public.localizacion (id_localizacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT sensor_foranea FOREIGN KEY (id_sensor)
        REFERENCES public.sensores (id_sensor) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.interacciones
(
    id_interaccion SERIAL PRIMARY KEY,
    estado boolean
);

CREATE TABLE IF NOT EXISTS public.registro
(
    id_registro SERIAL PRIMARY KEY,
    edad integer,
    sexo character varying(2) COLLATE pg_catalog."default",
    enfermedad_respiratoria character varying(20) COLLATE pg_catalog."default"
);

CREATE TABLE IF NOT EXISTS public.registro_loc
(
    id_registro_loc SERIAL PRIMARY KEY,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hora TIME WITHOUT TIME ZONE DEFAULT NOW(),
    observacion character varying(50) COLLATE pg_catalog."default",
    id_registro integer,
    id_localizacion integer,
    CONSTRAINT localizacion_foranea FOREIGN KEY (id_localizacion)
        REFERENCES public.localizacion (id_localizacion) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT registro_foranea FOREIGN KEY (id_registro)
        REFERENCES public.registro (id_registro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


