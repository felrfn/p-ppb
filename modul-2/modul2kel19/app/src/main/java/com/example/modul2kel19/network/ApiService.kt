package com.example.modul2kel19.network

import com.example.modul2kel19.model.AnimeListResponse
import retrofit2.http.GET

interface ApiService {
    // Anime by id
    @GET("top/anime")
    suspend fun getTopAnime(): AnimeListResponse
}
