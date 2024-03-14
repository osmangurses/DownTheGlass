using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Triangle : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject ballBomb;
    public AudioSource sfxAudio;
    GameManager manager;

   
    void Start()
    {
        manager = GameManager.Instance;
        sfxAudio = GameObject.Find("TriangleSfx").GetComponent<AudioSource>();
        ballBomb = GameObject.Find("BallBomb");
      
    }

    private void PanelActive()
    {
        if (manager.aDWatched==0)
        {
            manager.gameOverPanel.transform.DOScale(Vector3.one,1f);
        }
        else
        {
            manager.gameOverPanelADWatched.transform.DOScale(Vector3.one, 1f);
        }
    }

    // Update is called once per frame
    [System.Obsolete]
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag=="Player") {
           
           


            GameObject.Find("GameManager").GetComponent<AudioSource>().Stop();
            sfxAudio.Play();
            PanelActive();
            GameObject.Find("Main Camera").GetComponent<Camera>().backgroundColor = Color.black;
            GameObject.Find("Score").GetComponent<Text>().color = Color.white;
            ballBomb.transform.position = GameObject.Find("Player").transform.position;
            Destroy(GameObject.Find("Player"));
            ballBomb.GetComponent<ParticleSystem>().Play();
            GameObject[] grounds = GameObject.FindGameObjectsWithTag("Ground");
            foreach (GameObject ground in grounds)
            {
                Destroy(ground);
            }
            if (PlayerPrefs.GetInt("DeathCount") > 1)
            {
                manager.SmallAD();
            }


        }
    }
    void Update()
    {
        
    }
}
