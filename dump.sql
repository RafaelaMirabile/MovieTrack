--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title text NOT NULL,
    banner text NOT NULL,
    genre text NOT NULL,
    rate numeric DEFAULT 0,
    review text DEFAULT 'There is no review yet'::text,
    "createAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (2, 'Matrix Reloaded', 'https://m.media-amazon.com/images/I/51vdqg4R0+L.jpg', 'ação', 0, 'There is no review yet', '2022-11-09 15:10:39.973423');
INSERT INTO public.movies VALUES (3, 'Matrix Revolutions', 'https://cineclick-static.flixmedia.cloud/1280/processed/69/1080x1620_1594393600.webp', 'ação', 0, 'There is no review yet', '2022-11-09 20:52:10.700744');
INSERT INTO public.movies VALUES (1, 'Matrix', 'https://m.media-amazon.com/images/I/51unGrb-AAL._AC_.jpg', 'ação', 10, 'o começo da melhor trilogia da sétima arte', '2022-11-09 15:06:29.491815');


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 3, true);


--
-- Name: movies movies_banner_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_banner_key UNIQUE (banner);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: movies movies_title_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_title_key UNIQUE (title);


--
-- PostgreSQL database dump complete
--

