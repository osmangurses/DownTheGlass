using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Coin : MonoBehaviour
{
    // Start is called before the first frame update
    public Text coinText;
    public AudioSource sfxAudio;

    
    void Start()
    {
        sfxAudio = GameObject.Find("CoinSfx").GetComponent<AudioSource>();
        coinText =GameObject.Find("TotalCoin").GetComponent<Text>();
        coinText.text=PlayerPrefs.GetInt("Coin").ToString();
    }

    // Update is called once per frame
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag=="Player") 
        {
            sfxAudio.Play();
            PlayerPrefs.SetInt("Coin", PlayerPrefs.GetInt("Coin")+1);
            coinText.text = PlayerPrefs.GetInt("Coin").ToString();
            Destroy(gameObject.GetComponent<SpriteRenderer>());
            gameObject.transform.GetChild(0).GetComponent<ParticleSystem>().Play();
            Destroy(gameObject,0.5f);
        }
    }
    void Update()
    {
        
    }
}
