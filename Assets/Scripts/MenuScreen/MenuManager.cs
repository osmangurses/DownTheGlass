using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{

    private void Awake()
    {
        PlayerPrefs.SetInt("ADWatched", 0);
        PlayerPrefs.SetInt("Score", 0);
        if (!PlayerPrefs.HasKey("DeathCount"))
        {
            PlayerPrefs.SetInt("DeathCount", 0);
        }
        if (PlayerPrefs.HasKey("DemoPlayed")) { SceneManager.LoadScene(1); }
        else { SceneManager.LoadScene(4); }
    }



}
