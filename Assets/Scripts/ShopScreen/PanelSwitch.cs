using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PanelSwitch : MonoBehaviour
{
    public GameObject[] panels;

    public void TrailPanelOpen()
    {
        for (int i = 0; i < panels.Length; i++)
        {
            panels[i].gameObject.SetActive(false);
        }
        panels[0].gameObject.SetActive(true);
    }
    public void ChestPanelOpen()
    {
        for (int i = 0; i < panels.Length; i++)
        {
            panels[i].gameObject.SetActive(false);
        }
        panels[1].gameObject.SetActive(true);
    }
    public void BackgroundPanelOpen()
    {
        for (int i = 0; i < panels.Length; i++)
        {
            panels[i].gameObject.SetActive(false);
        }
        panels[2].gameObject.SetActive(true);
    }
    public void Play()
    {
        SceneManager.LoadScene(1);
    }
}
