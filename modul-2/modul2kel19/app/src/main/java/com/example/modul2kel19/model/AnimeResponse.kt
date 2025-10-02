package com.example.modul2kel19.model

data class AnimeResponse(
    val data: Anime
)

data class Anime(
    val mal_id: Int,
    val title: String,
    val type: String?,
    val episodes: Int?,
    val score: Double?,
    val images: Images,
    val source: String?,
    val year: Int?,
    val status: String?,
    val synopsis: String?
)

data class Images(
    val jpg: Jpg
)

data class Jpg(
    val image_url: String
)
