using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class DemoManager : MonoBehaviour
{
 
    public AudioSource[] sfxAudios;




    [System.Obsolete]
    void Start()
    {

        Time.timeScale = 1.0f;
        GameObject.Find("TotalCoin").GetComponent<Text>().text = PlayerPrefs.GetInt("Coin").ToString();

        SetSfxVolume();


        GetComponent<AudioSource>().Play();

    }

    // Update is called once per frame


    public void SetSfxVolume()
    {
        if (PlayerPrefs.HasKey("sfxVolume"))
        {
            for (int i = 0; i < sfxAudios.Length; i++)
            {
                sfxAudios[i].volume = 0.4f;
            }
        }

    }
   


    public void MainMenu()
    {
 
        SceneManager.LoadScene(0);
    }


    void Update()
    {

    }
}
