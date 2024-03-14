using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Settingsmanager : MonoBehaviour
{
    public Slider sfxVolume, musicVolume;
    private void Start()
    {
        if (PlayerPrefs.HasKey("sfxVolume"))
        {
            sfxVolume.value = PlayerPrefs.GetFloat("sfxVolume");
        }
        if (PlayerPrefs.HasKey("musicVolume"))
        {
            musicVolume.value = PlayerPrefs.GetFloat("musicVolume");
        }
    }
    public void MainMenu()
    {
        SceneManager.LoadScene(1);
    }
    public void SetSfxVolume()
    {
        PlayerPrefs.SetFloat("sfxVolume", GameObject.Find("SfxSlider").GetComponent<Slider>().value);
    }
    public void SetMusicVolume()
    {
        PlayerPrefs.SetFloat("musicVolume", GameObject.Find("MusicSlider").GetComponent<Slider>().value);
    }
}
