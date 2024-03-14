using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SettingsButton : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject volumeControlPanel;
    public Vector2 panelMainPosition;
    void Start()
    {
        panelMainPosition=volumeControlPanel.transform.position;
        GetComponent<Button>().onClick.AddListener(OpenVolumePanel);
    }
    void OpenVolumePanel()
    {
        if (volumeControlPanel.transform.position.x==panelMainPosition.x)
        {
            volumeControlPanel.gameObject.transform.DOMoveX(0, 0.3f);
            
        }
        else { volumeControlPanel.gameObject.transform.DOMoveX(panelMainPosition.x, 0.3f);
            
        }
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
