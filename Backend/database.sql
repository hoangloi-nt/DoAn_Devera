PGDMP     *                     z         	   projectCK    14.4    14.4 ?    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    17066 	   projectCK    DATABASE     l   CREATE DATABASE "projectCK" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Vietnamese_Vietnam.1258';
    DROP DATABASE "projectCK";
                postgres    false            ?            1259    17068 
   core_store    TABLE     ?   CREATE TABLE public.core_store (
    id integer NOT NULL,
    key character varying(255),
    value text,
    type character varying(255),
    environment character varying(255),
    tag character varying(255)
);
    DROP TABLE public.core_store;
       public         heap    postgres    false            ?            1259    17067    core_store_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.core_store_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.core_store_id_seq;
       public          postgres    false    210            ?           0    0    core_store_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.core_store_id_seq OWNED BY public.core_store.id;
          public          postgres    false    209            ?            1259    17206    creators    TABLE     ?  CREATE TABLE public.creators (
    id integer NOT NULL,
    "Name" character varying(255),
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "Wallet" numeric(10,2),
    address character varying(255),
    "create" integer,
    avatar character varying(255)
);
    DROP TABLE public.creators;
       public         heap    postgres    false            ?            1259    17239    creators__buy    TABLE     o   CREATE TABLE public.creators__buy (
    id integer NOT NULL,
    creator_id integer,
    product_id integer
);
 !   DROP TABLE public.creators__buy;
       public         heap    postgres    false            ?            1259    17238    creators__buy_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.creators__buy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.creators__buy_id_seq;
       public          postgres    false    240            ?           0    0    creators__buy_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.creators__buy_id_seq OWNED BY public.creators__buy.id;
          public          postgres    false    239            ?            1259    17246    creators__create    TABLE     r   CREATE TABLE public.creators__create (
    id integer NOT NULL,
    creator_id integer,
    product_id integer
);
 $   DROP TABLE public.creators__create;
       public         heap    postgres    false            ?            1259    17245    creators__create_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.creators__create_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.creators__create_id_seq;
       public          postgres    false    242            ?           0    0    creators__create_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.creators__create_id_seq OWNED BY public.creators__create.id;
          public          postgres    false    241            ?            1259    17215    creators__products    TABLE     t   CREATE TABLE public.creators__products (
    id integer NOT NULL,
    creator_id integer,
    product_id integer
);
 &   DROP TABLE public.creators__products;
       public         heap    postgres    false            ?            1259    17214    creators__products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.creators__products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.creators__products_id_seq;
       public          postgres    false    238            ?           0    0    creators__products_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.creators__products_id_seq OWNED BY public.creators__products.id;
          public          postgres    false    237            ?            1259    17205    creators_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.creators_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.creators_id_seq;
       public          postgres    false    236            ?           0    0    creators_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.creators_id_seq OWNED BY public.creators.id;
          public          postgres    false    235            ?            1259    17183    i18n_locales    TABLE     6  CREATE TABLE public.i18n_locales (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.i18n_locales;
       public         heap    postgres    false            ?            1259    17182    i18n_locales_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.i18n_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.i18n_locales_id_seq;
       public          postgres    false    232            ?           0    0    i18n_locales_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.i18n_locales_id_seq OWNED BY public.i18n_locales.id;
          public          postgres    false    231            ?            1259    17197    products    TABLE     ?  CREATE TABLE public.products (
    id integer NOT NULL,
    "Name" character varying(255),
    "Price" numeric(10,2),
    published_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    creators integer,
    "Category" character varying(255),
    createby integer,
    boughtby integer,
    image character varying(255),
    views bigint
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    17196    products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    234            ?           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    233            ?            1259    17112    strapi_administrator    TABLE     ?  CREATE TABLE public.strapi_administrator (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    username character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255),
    "resetPasswordToken" character varying(255),
    "registrationToken" character varying(255),
    "isActive" boolean,
    blocked boolean,
    "preferedLanguage" character varying(255)
);
 (   DROP TABLE public.strapi_administrator;
       public         heap    postgres    false            ?            1259    17111    strapi_administrator_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.strapi_administrator_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.strapi_administrator_id_seq;
       public          postgres    false    218            ?           0    0    strapi_administrator_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.strapi_administrator_id_seq OWNED BY public.strapi_administrator.id;
          public          postgres    false    217            ?            1259    17086    strapi_permission    TABLE     W  CREATE TABLE public.strapi_permission (
    id integer NOT NULL,
    action character varying(255) NOT NULL,
    subject character varying(255),
    properties jsonb,
    conditions jsonb,
    role integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
 %   DROP TABLE public.strapi_permission;
       public         heap    postgres    false            ?            1259    17085    strapi_permission_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.strapi_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.strapi_permission_id_seq;
       public          postgres    false    214            ?           0    0    strapi_permission_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.strapi_permission_id_seq OWNED BY public.strapi_permission.id;
          public          postgres    false    213            ?            1259    17097    strapi_role    TABLE     ?  CREATE TABLE public.strapi_role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.strapi_role;
       public         heap    postgres    false            ?            1259    17096    strapi_role_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.strapi_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.strapi_role_id_seq;
       public          postgres    false    216            ?           0    0    strapi_role_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.strapi_role_id_seq OWNED BY public.strapi_role.id;
          public          postgres    false    215            ?            1259    17123    strapi_users_roles    TABLE     n   CREATE TABLE public.strapi_users_roles (
    id integer NOT NULL,
    user_id integer,
    role_id integer
);
 &   DROP TABLE public.strapi_users_roles;
       public         heap    postgres    false            ?            1259    17122    strapi_users_roles_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.strapi_users_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.strapi_users_roles_id_seq;
       public          postgres    false    220            ?           0    0    strapi_users_roles_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.strapi_users_roles_id_seq OWNED BY public.strapi_users_roles.id;
          public          postgres    false    219            ?            1259    17077    strapi_webhooks    TABLE     ?   CREATE TABLE public.strapi_webhooks (
    id integer NOT NULL,
    name character varying(255),
    url text,
    headers jsonb,
    events jsonb,
    enabled boolean
);
 #   DROP TABLE public.strapi_webhooks;
       public         heap    postgres    false            ?            1259    17076    strapi_webhooks_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.strapi_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.strapi_webhooks_id_seq;
       public          postgres    false    212            ?           0    0    strapi_webhooks_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.strapi_webhooks_id_seq OWNED BY public.strapi_webhooks.id;
          public          postgres    false    211            ?            1259    17163    upload_file    TABLE     ?  CREATE TABLE public.upload_file (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "alternativeText" character varying(255),
    caption character varying(255),
    width integer,
    height integer,
    formats jsonb,
    hash character varying(255) NOT NULL,
    ext character varying(255),
    mime character varying(255) NOT NULL,
    size numeric(10,2) NOT NULL,
    url character varying(255) NOT NULL,
    "previewUrl" character varying(255),
    provider character varying(255) NOT NULL,
    provider_metadata jsonb,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.upload_file;
       public         heap    postgres    false            ?            1259    17162    upload_file_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.upload_file_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.upload_file_id_seq;
       public          postgres    false    228            ?           0    0    upload_file_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.upload_file_id_seq OWNED BY public.upload_file.id;
          public          postgres    false    227            ?            1259    17174    upload_file_morph    TABLE     ?   CREATE TABLE public.upload_file_morph (
    id integer NOT NULL,
    upload_file_id integer,
    related_id integer,
    related_type text,
    field text,
    "order" integer
);
 %   DROP TABLE public.upload_file_morph;
       public         heap    postgres    false            ?            1259    17173    upload_file_morph_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.upload_file_morph_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.upload_file_morph_id_seq;
       public          postgres    false    230            ?           0    0    upload_file_morph_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.upload_file_morph_id_seq OWNED BY public.upload_file_morph.id;
          public          postgres    false    229            ?            1259    17130    users-permissions_permission    TABLE     Y  CREATE TABLE public."users-permissions_permission" (
    id integer NOT NULL,
    type character varying(255) NOT NULL,
    controller character varying(255) NOT NULL,
    action character varying(255) NOT NULL,
    enabled boolean NOT NULL,
    policy character varying(255),
    role integer,
    created_by integer,
    updated_by integer
);
 2   DROP TABLE public."users-permissions_permission";
       public         heap    postgres    false            ?            1259    17129 #   users-permissions_permission_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."users-permissions_permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."users-permissions_permission_id_seq";
       public          postgres    false    222            ?           0    0 #   users-permissions_permission_id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."users-permissions_permission_id_seq" OWNED BY public."users-permissions_permission".id;
          public          postgres    false    221            ?            1259    17139    users-permissions_role    TABLE     ?   CREATE TABLE public."users-permissions_role" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    type character varying(255),
    created_by integer,
    updated_by integer
);
 ,   DROP TABLE public."users-permissions_role";
       public         heap    postgres    false            ?            1259    17138    users-permissions_role_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."users-permissions_role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."users-permissions_role_id_seq";
       public          postgres    false    224            ?           0    0    users-permissions_role_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."users-permissions_role_id_seq" OWNED BY public."users-permissions_role".id;
          public          postgres    false    223            ?            1259    17150    users-permissions_user    TABLE     B  CREATE TABLE public."users-permissions_user" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    provider character varying(255),
    password character varying(255),
    "resetPasswordToken" character varying(255),
    "confirmationToken" character varying(255),
    confirmed boolean,
    blocked boolean,
    role integer,
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
 ,   DROP TABLE public."users-permissions_user";
       public         heap    postgres    false            ?            1259    17149    users-permissions_user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."users-permissions_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."users-permissions_user_id_seq";
       public          postgres    false    226            ?           0    0    users-permissions_user_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."users-permissions_user_id_seq" OWNED BY public."users-permissions_user".id;
          public          postgres    false    225            ?           2604    17071    core_store id    DEFAULT     n   ALTER TABLE ONLY public.core_store ALTER COLUMN id SET DEFAULT nextval('public.core_store_id_seq'::regclass);
 <   ALTER TABLE public.core_store ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?           2604    17209    creators id    DEFAULT     j   ALTER TABLE ONLY public.creators ALTER COLUMN id SET DEFAULT nextval('public.creators_id_seq'::regclass);
 :   ALTER TABLE public.creators ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    236    236            ?           2604    17242    creators__buy id    DEFAULT     t   ALTER TABLE ONLY public.creators__buy ALTER COLUMN id SET DEFAULT nextval('public.creators__buy_id_seq'::regclass);
 ?   ALTER TABLE public.creators__buy ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239    240            ?           2604    17249    creators__create id    DEFAULT     z   ALTER TABLE ONLY public.creators__create ALTER COLUMN id SET DEFAULT nextval('public.creators__create_id_seq'::regclass);
 B   ALTER TABLE public.creators__create ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            ?           2604    17218    creators__products id    DEFAULT     ~   ALTER TABLE ONLY public.creators__products ALTER COLUMN id SET DEFAULT nextval('public.creators__products_id_seq'::regclass);
 D   ALTER TABLE public.creators__products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    238    238            ?           2604    17186    i18n_locales id    DEFAULT     r   ALTER TABLE ONLY public.i18n_locales ALTER COLUMN id SET DEFAULT nextval('public.i18n_locales_id_seq'::regclass);
 >   ALTER TABLE public.i18n_locales ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            ?           2604    17200    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            ?           2604    17115    strapi_administrator id    DEFAULT     ?   ALTER TABLE ONLY public.strapi_administrator ALTER COLUMN id SET DEFAULT nextval('public.strapi_administrator_id_seq'::regclass);
 F   ALTER TABLE public.strapi_administrator ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            ?           2604    17089    strapi_permission id    DEFAULT     |   ALTER TABLE ONLY public.strapi_permission ALTER COLUMN id SET DEFAULT nextval('public.strapi_permission_id_seq'::regclass);
 C   ALTER TABLE public.strapi_permission ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            ?           2604    17100    strapi_role id    DEFAULT     p   ALTER TABLE ONLY public.strapi_role ALTER COLUMN id SET DEFAULT nextval('public.strapi_role_id_seq'::regclass);
 =   ALTER TABLE public.strapi_role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            ?           2604    17126    strapi_users_roles id    DEFAULT     ~   ALTER TABLE ONLY public.strapi_users_roles ALTER COLUMN id SET DEFAULT nextval('public.strapi_users_roles_id_seq'::regclass);
 D   ALTER TABLE public.strapi_users_roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            ?           2604    17080    strapi_webhooks id    DEFAULT     x   ALTER TABLE ONLY public.strapi_webhooks ALTER COLUMN id SET DEFAULT nextval('public.strapi_webhooks_id_seq'::regclass);
 A   ALTER TABLE public.strapi_webhooks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            ?           2604    17166    upload_file id    DEFAULT     p   ALTER TABLE ONLY public.upload_file ALTER COLUMN id SET DEFAULT nextval('public.upload_file_id_seq'::regclass);
 =   ALTER TABLE public.upload_file ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            ?           2604    17177    upload_file_morph id    DEFAULT     |   ALTER TABLE ONLY public.upload_file_morph ALTER COLUMN id SET DEFAULT nextval('public.upload_file_morph_id_seq'::regclass);
 C   ALTER TABLE public.upload_file_morph ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            ?           2604    17133    users-permissions_permission id    DEFAULT     ?   ALTER TABLE ONLY public."users-permissions_permission" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_permission_id_seq"'::regclass);
 P   ALTER TABLE public."users-permissions_permission" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            ?           2604    17142    users-permissions_role id    DEFAULT     ?   ALTER TABLE ONLY public."users-permissions_role" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_role_id_seq"'::regclass);
 J   ALTER TABLE public."users-permissions_role" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            ?           2604    17153    users-permissions_user id    DEFAULT     ?   ALTER TABLE ONLY public."users-permissions_user" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_user_id_seq"'::regclass);
 J   ALTER TABLE public."users-permissions_user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            ?          0    17068 
   core_store 
   TABLE DATA           L   COPY public.core_store (id, key, value, type, environment, tag) FROM stdin;
    public          postgres    false    210   ??       ?          0    17206    creators 
   TABLE DATA           ?   COPY public.creators (id, "Name", published_at, created_by, updated_by, created_at, updated_at, "Wallet", address, "create", avatar) FROM stdin;
    public          postgres    false    236   ??       ?          0    17239    creators__buy 
   TABLE DATA           C   COPY public.creators__buy (id, creator_id, product_id) FROM stdin;
    public          postgres    false    240   e?       ?          0    17246    creators__create 
   TABLE DATA           F   COPY public.creators__create (id, creator_id, product_id) FROM stdin;
    public          postgres    false    242   ??       ?          0    17215    creators__products 
   TABLE DATA           H   COPY public.creators__products (id, creator_id, product_id) FROM stdin;
    public          postgres    false    238   ??       ?          0    17183    i18n_locales 
   TABLE DATA           f   COPY public.i18n_locales (id, name, code, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          postgres    false    232   ??       ?          0    17197    products 
   TABLE DATA           ?   COPY public.products (id, "Name", "Price", published_at, created_by, updated_by, created_at, updated_at, creators, "Category", createby, boughtby, image, views) FROM stdin;
    public          postgres    false    234   ??       ?          0    17112    strapi_administrator 
   TABLE DATA           ?   COPY public.strapi_administrator (id, firstname, lastname, username, email, password, "resetPasswordToken", "registrationToken", "isActive", blocked, "preferedLanguage") FROM stdin;
    public          postgres    false    218   B?       ?          0    17086    strapi_permission 
   TABLE DATA           v   COPY public.strapi_permission (id, action, subject, properties, conditions, role, created_at, updated_at) FROM stdin;
    public          postgres    false    214   B?       ?          0    17097    strapi_role 
   TABLE DATA           Z   COPY public.strapi_role (id, name, code, description, created_at, updated_at) FROM stdin;
    public          postgres    false    216   ??       ?          0    17123    strapi_users_roles 
   TABLE DATA           B   COPY public.strapi_users_roles (id, user_id, role_id) FROM stdin;
    public          postgres    false    220   ??       ?          0    17077    strapi_webhooks 
   TABLE DATA           R   COPY public.strapi_webhooks (id, name, url, headers, events, enabled) FROM stdin;
    public          postgres    false    212   ?       ?          0    17163    upload_file 
   TABLE DATA           ?   COPY public.upload_file (id, name, "alternativeText", caption, width, height, formats, hash, ext, mime, size, url, "previewUrl", provider, provider_metadata, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          postgres    false    228   1?       ?          0    17174    upload_file_morph 
   TABLE DATA           i   COPY public.upload_file_morph (id, upload_file_id, related_id, related_type, field, "order") FROM stdin;
    public          postgres    false    230   N?       ?          0    17130    users-permissions_permission 
   TABLE DATA           ?   COPY public."users-permissions_permission" (id, type, controller, action, enabled, policy, role, created_by, updated_by) FROM stdin;
    public          postgres    false    222   k?       ?          0    17139    users-permissions_role 
   TABLE DATA           g   COPY public."users-permissions_role" (id, name, description, type, created_by, updated_by) FROM stdin;
    public          postgres    false    224   ?       ?          0    17150    users-permissions_user 
   TABLE DATA           ?   COPY public."users-permissions_user" (id, username, email, provider, password, "resetPasswordToken", "confirmationToken", confirmed, blocked, role, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          postgres    false    226   ??       ?           0    0    core_store_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.core_store_id_seq', 28, true);
          public          postgres    false    209            ?           0    0    creators__buy_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.creators__buy_id_seq', 1, false);
          public          postgres    false    239            ?           0    0    creators__create_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.creators__create_id_seq', 4, true);
          public          postgres    false    241            ?           0    0    creators__products_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.creators__products_id_seq', 7, true);
          public          postgres    false    237            ?           0    0    creators_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.creators_id_seq', 4, true);
          public          postgres    false    235            ?           0    0    i18n_locales_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.i18n_locales_id_seq', 1, true);
          public          postgres    false    231            ?           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 60, true);
          public          postgres    false    233            ?           0    0    strapi_administrator_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.strapi_administrator_id_seq', 6, true);
          public          postgres    false    217            ?           0    0    strapi_permission_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.strapi_permission_id_seq', 481, true);
          public          postgres    false    213            ?           0    0    strapi_role_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.strapi_role_id_seq', 3, true);
          public          postgres    false    215            ?           0    0    strapi_users_roles_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.strapi_users_roles_id_seq', 5, true);
          public          postgres    false    219            ?           0    0    strapi_webhooks_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);
          public          postgres    false    211            ?           0    0    upload_file_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.upload_file_id_seq', 28, true);
          public          postgres    false    227            ?           0    0    upload_file_morph_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.upload_file_morph_id_seq', 38, true);
          public          postgres    false    229            ?           0    0 #   users-permissions_permission_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."users-permissions_permission_id_seq"', 19056, true);
          public          postgres    false    221            ?           0    0    users-permissions_role_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."users-permissions_role_id_seq"', 3, true);
          public          postgres    false    223            ?           0    0    users-permissions_user_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."users-permissions_user_id_seq"', 1, false);
          public          postgres    false    225            ?           2606    17075    core_store core_store_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.core_store
    ADD CONSTRAINT core_store_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.core_store DROP CONSTRAINT core_store_pkey;
       public            postgres    false    210            ?           2606    17244     creators__buy creators__buy_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.creators__buy
    ADD CONSTRAINT creators__buy_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.creators__buy DROP CONSTRAINT creators__buy_pkey;
       public            postgres    false    240            ?           2606    17251 &   creators__create creators__create_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.creators__create
    ADD CONSTRAINT creators__create_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.creators__create DROP CONSTRAINT creators__create_pkey;
       public            postgres    false    242            ?           2606    17220 *   creators__products creators__products_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.creators__products
    ADD CONSTRAINT creators__products_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.creators__products DROP CONSTRAINT creators__products_pkey;
       public            postgres    false    238            ?           2606    17213    creators creators_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.creators
    ADD CONSTRAINT creators_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.creators DROP CONSTRAINT creators_pkey;
       public            postgres    false    236            ?           2606    17194 %   i18n_locales i18n_locales_code_unique 
   CONSTRAINT     `   ALTER TABLE ONLY public.i18n_locales
    ADD CONSTRAINT i18n_locales_code_unique UNIQUE (code);
 O   ALTER TABLE ONLY public.i18n_locales DROP CONSTRAINT i18n_locales_code_unique;
       public            postgres    false    232            ?           2606    17192    i18n_locales i18n_locales_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.i18n_locales
    ADD CONSTRAINT i18n_locales_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.i18n_locales DROP CONSTRAINT i18n_locales_pkey;
       public            postgres    false    232            ?           2606    17204    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    234            ?           2606    17121 6   strapi_administrator strapi_administrator_email_unique 
   CONSTRAINT     r   ALTER TABLE ONLY public.strapi_administrator
    ADD CONSTRAINT strapi_administrator_email_unique UNIQUE (email);
 `   ALTER TABLE ONLY public.strapi_administrator DROP CONSTRAINT strapi_administrator_email_unique;
       public            postgres    false    218            ?           2606    17119 .   strapi_administrator strapi_administrator_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.strapi_administrator
    ADD CONSTRAINT strapi_administrator_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.strapi_administrator DROP CONSTRAINT strapi_administrator_pkey;
       public            postgres    false    218            ?           2606    17095 (   strapi_permission strapi_permission_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.strapi_permission
    ADD CONSTRAINT strapi_permission_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.strapi_permission DROP CONSTRAINT strapi_permission_pkey;
       public            postgres    false    214            ?           2606    17110 #   strapi_role strapi_role_code_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_code_unique UNIQUE (code);
 M   ALTER TABLE ONLY public.strapi_role DROP CONSTRAINT strapi_role_code_unique;
       public            postgres    false    216            ?           2606    17108 #   strapi_role strapi_role_name_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_name_unique UNIQUE (name);
 M   ALTER TABLE ONLY public.strapi_role DROP CONSTRAINT strapi_role_name_unique;
       public            postgres    false    216            ?           2606    17106    strapi_role strapi_role_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.strapi_role
    ADD CONSTRAINT strapi_role_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.strapi_role DROP CONSTRAINT strapi_role_pkey;
       public            postgres    false    216            ?           2606    17128 *   strapi_users_roles strapi_users_roles_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.strapi_users_roles
    ADD CONSTRAINT strapi_users_roles_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.strapi_users_roles DROP CONSTRAINT strapi_users_roles_pkey;
       public            postgres    false    220            ?           2606    17084 $   strapi_webhooks strapi_webhooks_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.strapi_webhooks
    ADD CONSTRAINT strapi_webhooks_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.strapi_webhooks DROP CONSTRAINT strapi_webhooks_pkey;
       public            postgres    false    212            ?           2606    17181 (   upload_file_morph upload_file_morph_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.upload_file_morph
    ADD CONSTRAINT upload_file_morph_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.upload_file_morph DROP CONSTRAINT upload_file_morph_pkey;
       public            postgres    false    230            ?           2606    17172    upload_file upload_file_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.upload_file
    ADD CONSTRAINT upload_file_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.upload_file DROP CONSTRAINT upload_file_pkey;
       public            postgres    false    228            ?           2606    17137 >   users-permissions_permission users-permissions_permission_pkey 
   CONSTRAINT     ?   ALTER TABLE ONLY public."users-permissions_permission"
    ADD CONSTRAINT "users-permissions_permission_pkey" PRIMARY KEY (id);
 l   ALTER TABLE ONLY public."users-permissions_permission" DROP CONSTRAINT "users-permissions_permission_pkey";
       public            postgres    false    222            ?           2606    17146 2   users-permissions_role users-permissions_role_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."users-permissions_role"
    ADD CONSTRAINT "users-permissions_role_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."users-permissions_role" DROP CONSTRAINT "users-permissions_role_pkey";
       public            postgres    false    224            ?           2606    17148 9   users-permissions_role users-permissions_role_type_unique 
   CONSTRAINT     x   ALTER TABLE ONLY public."users-permissions_role"
    ADD CONSTRAINT "users-permissions_role_type_unique" UNIQUE (type);
 g   ALTER TABLE ONLY public."users-permissions_role" DROP CONSTRAINT "users-permissions_role_type_unique";
       public            postgres    false    224            ?           2606    17159 2   users-permissions_user users-permissions_user_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."users-permissions_user"
    ADD CONSTRAINT "users-permissions_user_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."users-permissions_user" DROP CONSTRAINT "users-permissions_user_pkey";
       public            postgres    false    226            ?           2606    17161 =   users-permissions_user users-permissions_user_username_unique 
   CONSTRAINT     ?   ALTER TABLE ONLY public."users-permissions_user"
    ADD CONSTRAINT "users-permissions_user_username_unique" UNIQUE (username);
 k   ALTER TABLE ONLY public."users-permissions_user" DROP CONSTRAINT "users-permissions_user_username_unique";
       public            postgres    false    226            ?   ?  x?????6???)\?sH???]??K?)Z\n??$-I`?m?+K?Dy??k??ݓ???)-?ky7???]???h83ΐ?G??Y=#???pY?[?rA??y5?D????W?????΋2~??Zfh=<?`0#????Q???$E`?:O?W??3C1-??? ???????ANP?3??I?漸W?e???X?)?waK@??
?1?'?>e?,R??Ќ????_?`?Q??????YQ??J?g4x]??z?&EM9?g_?_~??}? ?w?4-?????tp? ??%( 3?L?,+?I>d$??b?9??s(?ʯ??f??????o??)???~???/???3??9?Ϫ{6???????\pv?S \?U2??ٽ???x?s?<I?:??a???7?36-J`?(?%?؝6s????:w??(?F??#??$#?? ނ???	??98??1?Y:z????I?8?ypp?˃?n6N?t,ԯ:<?pĞ????nx	?)a???XL?????????f?dsM?iaM??Nq??d)?j?&ђ??DS?<OO?IF???p??
?R?F?b	P??I?A??1???^???@?(-ɤ???cc???)?
?e?????/q>?0?c@???jh?e???Ä??M2??(?o5)q*?.?lj?ⷃ?Y,?eY?H

P??zX&T?????4,K??i?19?(?g8?$?Ge?V0a?5'Ez?sa??:??w?S??Hή??,2.C\Ѡ??}w?"H)?:Ҕ?9T?<Y?إ?h|???6????:V?"]U
??1??z??<??0燇?x2/??J[?fC?$	??Ұ9?9???4????j?9?? G(????a?
뾾?Z???ޤ&Y??U?V?I+mCC???=?#e?gZ~?མiZ?????M\H?iz????cV?w???G?4N?]L?7?????s?~?U?K???? J??v???r?aY???_?:m?kL??6??~??1?+?$Bm%d??J?Q?8?0N?????6[q?G?`I>}???Z$?????|U????(3?]Ʌ?Sʶ3Z???"?????O~??????h3e<?P??c??}rt??նz,~??+?K?ct?d_?G???CҠNz??K͍?DY??hM?x??=?8+QNAE??\?2bZd`
?+??l6?J?NZ+?'?h^?8S?A???;AY6A????j:?/????O?h?.???)??ut???%<??????Ѣ??1̊b&<???%@????A	?ד?A@??<8?k??CC??$eQS?A?9?⼊&B?l?c3???sB??n-?+???%????x?֠??qL?H?G?{??e1% 4?UW]½:?vu?$3$?KX
 ?p4????!?LK?X??$? @?Ē?:?(??X???QiNSR?rB??P??W?$- #[?G??()!b?`?Ĝ	???ŖXSҥ???N?}? U?o?E?kA?4?q?80??p?#H???b?͟U???#V? U??)??sϐ?L?C??[fJ???ի???????(?y?)??߃S?K???
q??R??x?? ???2~;?
x| ?????D?J?r,?α?V)??9_??Unu ??7qF??ds3??3??׃?cl??0*???d	$???? V$??gl8??a??EI?[?4?*??<|??????\q!2D87B??????eh·5???e?5?/???D?Q<7$9;??2/??Z? 1
?d??S?Q?P"*?>??eS4?1D?V?Q"?-M:OLk?:?mj?=1??}h`U?~??#????8zU0?Iixs?)????]g?l9V?8X;?{????K?\?_???@?[??????eк?E:D {'6?ڊVZy??|T??I??4??w:^b?p????n2hUۇ????QCa?9?#?⃳?>???O?o]????j?㝬i*l??cEζ?Ded??7?i??I?1?5BWM???????e?T??3Y2???uaJʊ?-jĸ??k??'|?՗??-?E8?F??u?&?9iW?f?V:}?Ś???'??˞'?楮?*wE{?Z???H???T??8?A?NQ4? G\"D????Bx?b?~>}?~!???IJ?5?u????????[?yo???????&??"n?D?8*FrcN?ʖ\???????5]?˝	w%?9??????????)???3???f??G,?Ŧqo?o?F??9L?
?a?dCq?H/ko???>j]9?P???C?9I?<D?/?????????y?Q??A?FC??`#?K?????uk???4?Ȟ??D?8??-???'m~??6??"=?F?8*/Ɨ?@R?=?%#&GZ???E*?^(x??txE???0}'???<??>2??/?r??????B?	?c??tl????%2???\??H??M}lp?C??????G???1ʹ?h???$%???2Ε?[?8??ڵ	4N?OJ_?????N悴?e%? ???^??c>?	Xm?:??В??r???kܪ?oJUT?݇??w??ͱ+?
_༌j?鼌A??8?e]G??~?ԋ??qG?5?ƣ?ˈ?^?:??O?XT??*-Nb?????4B?v
?V????q??	?VK=_?x?W?^I6??????c??
n??*b?	????-mB?(??35??<(ރ???of???o???ʦx???)=j?<?T???;M?&ǉt??J0???f40??v??tcO???C?U??I?w??2???????P??	?](??yy?????P?2?!Ѩf?ћ?P???????n;n???WΜi??????xqf?PZ?!l??5{?j??%??P??1ޝc??7w?o??e??y????01?@*[5?'?և?X?c???9?SYfdg?\???O?A^?x?K??D????j??g??ts?k?t?????H/5mn]?̠????,?!߮??X?:?*?????'IQ?1??>f???T??sxV??Z?Z?K?7>?y?e·?;np;cL???I??[?????l??;b?$l?F????\[????JW(Op?
?v????wC????fNJb?t?b&oj~?Y?P7 LI?j?	(UlD?x?V8&??6??z(?[L????U
???}>?[l?Ul??{q???? ?B??o:E<?B?q(????"?????g?m??mܑ???D?y!?*
??D?4?D??/??!?N?????+-?u?PVc?E??Wz??V?,rV?(?N?,??+??Ԛ#?\f?0???EZ'????|u????j??B?G?|???B?-?<?*???!5?)??\?)Ib??8!???"n???????(P?3?G?4+ʰ?L?z6?6?I?nA???Ĳcn?͘xkĘ1A0E?(ꍀ.J?%z?}X1???%??>??M??\??a-???ҴEjّ???h?*Qj?J?P???a?k??"?L??j)e?Y@?B?????????^鶩tO?GW?͉F?#S??.z????F?X[???]?ݵW}???XS$ƭ}??Y???!???????q?`??J??D?U???M?}I}{:????G?????_-g.?\9d???-??ѯ?ͩ??rQ??T??m?*????k???@D?W?ib%???h?YqA?????o X???:???\m???U?????K????????Խܫ?n?6????6۽??e?;%??5B??f̜Z?"???J?p]g??}?(g[y?:%?
????;'???;I??⤜9??~??O~_`???M??????|?g>?[?|X?Őn????*????*y??m+??N1?????/??Ң???O???(?1??i???yC?)??????yK㬬???Pr??-??hఏ???A?E㈏?q?$G???¡?l?????I?VH{?QܼGa?׽?ݲ????w??k?{??)Dw$???t???n.??Ԛ,?'??9P?c??$S?ʖ^*?)??E??/?N?Oڌ??ڹ?o??_EG?j????W??0?R?~t?Ν????$      ?   ?  x???=o?0?g?Wd/B?y??4C?@G?-??&?a??WV???ۥ(??9??s<j?ua?>N}C@t???3x?BJ?L????d??~E????B??????%?jE??lRdSm%?@,\Q?/???6wc???_2????`?u?[?֣???L?+{9?@?e?jGIT?#?,90PH. ?2:i??Jw8??}?>?g??)?Cx:?4>??K???????a[?i?0??Qkp 5`??6a8}?????+?|???n????^?G????O?^J?I??o?Z8??~?Y?M?	????(9B??Sb2?Ŧ?T?? ????*?pF֨?????Lf7??b,???y?>?a|?D<g???|?RH?3?L ??Ro_j?Fʵ???U6?PkI3!?A?d???&gE?,Fs?l?|??e|9?ϋ?Z?V?g???      ?      x?????? ? ?      ?   !   x?3?4?4?2?F\?@Ҙ?H?p??qqq 49q      ?   -   x?ı 0???L?? ?d?9b
???I???K+Ռ?/? ???      ?   ?   x?3?t?K??,?P?H???L????!###]]sCC+K+=CSms<R\1z\\\ ,?o      ?   ?
  x??Zێ??}??B??r?~ћ=???d???A??DIQ$%??h?>?"պt3/?lc?F?8}Xu?NU??y????????? G,&4"??_????FC????!a???iL??)????G/?&G??u^??f???N7?8/?IV$?}<.?O?<)??&?&?S?Lf?SS?e2y?b!?\0????b?zot??o???D_?I??>W??D"?'(?15D:V\_C9?X?X2c?:~^??_zD?ROIE?l?g?aP??<?7i2xΛQ$c???B???X"??????>?Γv?x?????!SO?(eV?1_?#z???r/???1/????XJ??1W?rk@4???Լϖl7;????#?cbv?\????? IZOE?MՒ???xU?FG8?<(,"1??:$???S=A??PPX?8??M8lP???N?W??8!?$?\??c??i?5???E,T[(??(?M-a&??6i?i?=?/?5??V?dC??V???<??R?9Juo?????,f#??Q??`?????t?T0?E+/A?????T????j?x..yn>[????	?5K?A?[G-Dsa?yUͩC?Σ?b?a?^?r?????H?t M?y???Ť:p#3Kr????:? ???6?ҫ3?!U????j=?????d9 ?|??o?8?9ZH?.!???Ίi,P?Z= ?6?f5[.\b?K?0????]X!?Z"hf?@??<ťf???g<?f6?PcG?_??at.??H????Ĳfv,?AOr	?V?p?Q?|?!+WE?D??yj	#?g??+?2??Ȟ???wFq??ԋ|?[?`????6???!??s0?(?Q0(?N8? ?????y???ρ??S)Ⱦ{??М?0 ?)?? K(C&c)??1ޮ?????f??ȑS)?F?-g	HE? ?6v???!?C??!?<9?"5o??-)??b??:?2 ?LF?'??-???ز??Rl???Ob????6sGt}IQ?h?J{c?3??"D?֓?QD?????T.,???S?W????˾??!?2??ZO}9\??Op@????I?txp??C0?$^S?0???˞nB?BI?z????V?YI???d?\?]hG?\?????@5A? (??"?hF4FZ].m?G[??&??cp?f?>?UN8?^?<?_???w?l????????q?#?$c??x\?????txI7??2]b?x? gzZ?5? ֭?S????qQ?%.<z?????{:?v1E????ü
??ZO?z???q?iqS?l??/?x-o?6????|???l?????P8Z?ro]4???W????S?G???(O??fŨ?Y??????Coc=˚QLx??w??ȑ??e]??I5???L$????ذi?=?x?H?|??,?|RZLȋ???P?r?d&?3Q???hҬ?լ????D?IQ??A?}?pbW?DOh??"???&?^??&4?1?ق~d???n?b?e???S?ů?\Ō??ǚ2????Zlߡ$w??6_?]2q?
=ܛT?[^??4Rq_Srf?פ?5C>V??e3S????a???y:?OVL??XrH?Qu??A?ڡs$?1xH?DL??-O??KYN??礶??z?ũ]o?W7j?????Q<N`P???r????d?<g??.????CH??dk?KC?i=U?X??!	???#LY?fw?*?W??u???uP??e?ׇ
?㏶p?C?ZO?XD?,??x?s?t??8M??s	?\o"x?8 ?S??A?D?,???<9}(ق?-????Ǩ<?????Cd?}??O?Qc??"???ȏ	???-??SpE_sn?e?I/eSԠ???@??1(*??[???;???D?
q?b8?
?Җ.?ŻC???U?M_?e??ll/M??\״f{r???џٺn???e?ѭS?"?>m3x&6K6]O?e%g???i????~d ?X??xk?}?ө???IZ?FS? <???o?iu݌D_?r?|K???5Y????Ц=P???????'B?&D??"???Y?;P4z?C_*?"???H???xk?0??!YG?@H]?Q????5w4b?k9??g?/0????K??????"?+??S??Ӊ?M9ϥrt?vߒM?q??^WrS???"@%nw???Tj=5??ҭ5\Cb?T?fB???J???g?N'?ͪ./??U?????1o??<??	ϭ?N???c?h؉K"z.??G9*k??Rgo+?-mk??4O?:G?xH¼???x?%?̊r?? ?a??????????ZϾ?t??A?&?V?ʕ.????
????~t?u-'-?YO?Y3}?<??n?v?k?RI??VE?jS?KZ'?tj菤?$????@???0????,@?jC?I?
??"??|Tlg?r???kZ4????u?????V??N????+???%m귷?p?p}K??ܥi1x=>?k<?CILE2l??Q???y??*qG??L#????A???????????gv?e;?_;????
z}A??Ş??2?l???!??o%<?????C,?q_??mh??<ֽ݅-6?C3?	''0???Z?j?$?}j??B??s?y֎?#?? ?)????i??@?]2xI?Ii?i9??j??Ap???Wḵ???P3]??ũ??s?|??Bd? ?N?~??$0???k;?}??r?f?????????7c??D????????h+K?
j=??ox?[?)?j=e??TtQǒY?L??. ???3Y3??&?b???b??Y(??܅?_??O??] ?c      ?   ?  x?m?ˎ?@?u????R?F?Ҷ????n =??6>???1&ݛ??ɟ?/E??Qd1?????1??"9X???T??hC???E?pѽ?Z?׎???G?ϊU?-?O?ס???oJ>	^?
?? ?Z?؆?9?0?8?#?W?¥6??p	??????A??A?d@Wu?dO?o???6j<M6?ڏ????OdW??e???ē^?_???????wp|>??m.R?k??M(GԕPp? Րa?u??J<p?I?/U??i??Mx??P݉?ϤN??ֲ쫋?m?ck?I0߁??UW?,?`?h?ׁ???D$?m?v?ĕ?r??(??ID)ñ??? R????8J???7?I?SwW^??jo?6_CQ?6[U???f??>?n?o?<U?CwP??|\t
?>?v?V?S???Ӕ0?p?????:RP?a?d%?^4?^?ܚҤ?p?wQ^??C>?]????u?of?+±,?]??x?.?ä??Ƌ?c?7[?V???08??      ?   ?  x??YKo?F>??
k?? ?E׽??)??z?w???xرV??i?5?9{???>ꫯ]??2m?I^?a[????J?x?????????莺?]???BB7q???r??ͫ=??Uu???i?X5z???E?j?!?q??w?o#?w??Eh? @??|9?I~?v1:???:????????*????$ä>Z??:???i?.Lƴ?x?A`?ĽC?5N?|aWy??昩\?u???le6t?,?$RMR??????{?Ӹ>?_?U????Ti???????u?{?u?S?b?=?F?hXO????????e!?#??L^q??E????k???X?*K??8f4c?L}?????:SI?ʪxJb]ٳ	?sQ??????/Ã???έ?E?=?2???Cm???ѥ?VE?g\LB'??
җ(??/̄?L0C???s???
1??y)???&i<
ⵢ@(`{??ë?o?q??M??k$ ? k??!?Ei??r?!??0??8r??GЎ?=?Ƽ1????&???R?j?36?m??;? ??c>??%?m ?LN?B?!?@Ųu????ﹶRPo?~?M3G???Ѿ??rm??j[????bxn+}|J????{?|8*̨u?????&F?`<+??<??M?K?6?f?Zk???		6ϵ???m,L?yN??$?6.!Xl????????@>?',?+hvRd??erϦ>?????pltV??#??~?y&???^3????T??xW?????٫ޞ??b??q-,ww??:S?E7??7x0??呓%Ӄ???i?sErP???a?L???@?@?????(.??+98:Ii????iLV۬?bf'x?-{3˸B?mY??m`I^1k?	??fQ?f?L?b?ݲ+ܩ],?+vm??Iy???????OЩY?>g??(??q_C}foA?O????)H??????2'?.?&;9ӭ?6jl۶???ܗ*???=?ɮ?>?ӹ???T??Ǧ?d?;t3p=[@P??|<?Cʜ???????R\bVtCx>?gv?/6>Ƶ?=?I?????S??4???~&?X_J$F??Z??%?6?W_2??1˷%%????Iٟn??n?"|?????r??\???esC???K?)laC?????^Vv?Y???[Y%}i?(w?4??)??雳???r?D?      ?   ?   x?}??N?0???S??Z???c?x?\L⭑???$ޞlQH??????/?kY)??_CT,???uxG?b??9b???B??gB)?g	?½????:3?0???q????`?"mՋ???Cmk?Ylյm-?K?\?BQBtK?U dNL?ΐd??(LyO?0?J?#=?S?????m???]??m???*?????]??????^k?Ղ}?      ?   %   x?3?4?4?2?4?Ɯ&@҄?H?r??=... K?,      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?   ?	  x???ے?H???w?g???'?c?	\?g7??ۘ??[-u?U[I??Ds???%?S??4?ݸ~_?\??o?~?t????:???s?v???w?????}}????tJO????}K?1?@???-@?ДR?q??k?????[?#????ю???ov?{???v~?K@??U?c?y??<w?{??4?|?ۗ??~??g?J5?9um?|??t?e?ȟ?9??O?tn??B?Od9Er?]??????~o???F???bo"YX????b??t?ڏ?????????k7??r???m?u???꜔I$?y;ĵ]????y?Q???ھ????Γ?7I?I?p???>??/??~?i?????>??]q?q>{???:?K???_??ɱK???\?鳿|?xޡ??O??:?6?X??RM֊y?Z????{?k??ڣ_n??>??l??o????jL?ү?\?p?4c2??~??Zs????w?g??Ɵ??m?/??????d??1??Τ??,?l????I?:UE??6^ooC??"3u?K?d?B?????????!{?? ?}???M??mV]i?o?I????1?S#??l*??飵Q$}XD-???{??[^v)?9??7K?F4??7[&?????h?????|?㹻???2??2b?)l۩???v?t[??"B??_????L_F2=?ւ-<??S	??q?1??G??M?F??I?Jn?? ?f??#Y?9V?֐?r?a???!P?´??./\???&XB?;?z??~u?????M??[??+?%u,????.?*??F'?????]?a?	??GF?;?e?~P?>`??||tCn???`TR#?L??C6???A7?s??{N????????G?1??v5Xo????? ?{Q:p???s?&"`/?Jt?i?~????@yfY????-,??? ?*Tɰ????>?w5-k?k\?PWa?aQY?7ETY8&?????p?4M?3w?}?????nh?*??O??u?9א> gP????ff?eqv?"???????????]??E?lw?H????n???	=~??ʱ??$?!&P ?f	+P?0y?
??1f?R9)`???-:?;Ħ?j??&????/??*F?t?S.???E?
??D4?N?"E?	Rp?G$?i?8DB??
`Ͽ??V?T???[?)?n1K8uQ?94??R?;n?
2K?o?$A??p?H?:?#?R? U89?

??U??sv??(B?'죈ŢP?H?%?PU"
B+f???Bq԰$A<$?Rdؼ	??P͐??*b???ik???U?v???or??+??e.??*?J8?;??Ǯ??i'??-*?5?Ȯ??֪Z`7D:U???????m??g Wܨk?.\B???)??h??7f7Щ???n?L???J???;j@n`]?sն#`??@???Kߞe?#??x?b>?????c?_q*y*?_???"???d?NL鐅???Ri*i?m*3??Ps????MII??BCl??*a??z??
x	\??	坰}>D?g?BJ?6??0A]????
U???Iਥʓ??cm??R???n^m? _ܬ??<<??Q8?c&&S??????Q?]?HKl??E3?>?????O??????;{v??o?"?e)F???S218?G?d1?K??\??UjH?ڥ?G?
B?MaaQ?????/v%	鼋???}?*ZF??`Y#?v?G?jհўl??????Q+l?hC0?^?
7d`^U T	Z51U?BC?0?v?Ah0cYM?$EO?+T?E?JX8s????%,?WP?"???^???(???2?0?Ġ%L??<V????T??
??\?<? ????ݛc??i?????ήv??7o??B"?JPO?2%PRP3?t?^Q?g??G????Mlᣨ??i&???;?c?"?肒Dծ&CZX?????VH?3?EQ?B??C??i,D?? ?E?G??6?M?????.l?+??BW?@?u-<8?,???|??C??Ғ?J?@??"??)r?j?b_BAȈ?A?"???kTE?08?U?L싔A?v?/?TkCՊ\]??t??G?^%:֐&??&??&RR%M,c?.d???F??]??L??V?????6ă8X S9??t?ʟ)?a[^?b??F?(?[&F?(l??:2?l?s?\lʣ?Q8?N????v???Ԉ??\1	?-؂????U??N??a-0!????K)??1c??e01@L?`S^??öJ?2??r??E??:???*??1?6j??ゥ6??~???t???PbՌ{??iľ?2?Mb???hdچ;?????6
(??i'????3????e?:{!?'$?>???cȩ,?4???CI!???)4??? QH?R?I#?9??@q??a2??E??L???ţ??P??? ?b?`?????_߾}??h?'      ?   q   x?3?t,-?H?+?LN,IM?tIMK,?)Q(??IUH?,K?S(?WHDV?PZ?Z?ǉ"??D\Ɯ?)??y?L?e?%??? +?h4?(M??Lơ?4?
 Z &??qqq U?F?      ?      x?????? ? ?     