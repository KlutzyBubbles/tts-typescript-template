export function runExamples(): void {
    print('Music examples')
    print(MusicPlayer.loaded)
    print(MusicPlayer.player_status)
    // print(MusicPlayer.playlistIndex)
    print(MusicPlayer.playlist_index)
    print(MusicPlayer.repeat_track)
    print(MusicPlayer.shuffle)
    print('1-----')
    print(MusicPlayer.getCurrentAudioclip())
    print(MusicPlayer.getPlaylist())
    print(MusicPlayer.pause())
    print(MusicPlayer.play())
    print('2-----')
    print(MusicPlayer.skipBack())
    print(MusicPlayer.skipForward())
    let audioClips: AudioClip[] = [
        {
            url: "https://file-examples.com/storage/fe63e96e0365c0e1e99a842/2017/11/file_example_MP3_700KB.mp3",
            title: "example file"
        }
    ]
    print(MusicPlayer.setCurrentAudioclip(audioClips[0]))
    print(MusicPlayer.setPlaylist(audioClips))
    print('3-----')
}
