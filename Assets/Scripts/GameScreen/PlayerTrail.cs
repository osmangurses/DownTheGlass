using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerTrail : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject[] trails;
    public int trailIndex;
    [Range(0f, 1f)]
    public float[] trailTimes;
    public float trailTime;
    private void Awake()
    {
        if (!PlayerPrefs.HasKey("ChoosenTrail"))
        {
            PlayerPrefs.SetInt("ChoosenTrail", 0);
        }

    }
    void Start()
    {
        trailIndex = PlayerPrefs.GetInt("ChoosenTrail");
        trailTime = trailTimes[trailIndex];
    }

    // Update is called once per frame
    private void Update()
    {
        trailTime -= Time.deltaTime;
      /*  if (PlayerPrefs.GetInt("ChoosenTrail") == 0 && trailTime <= 0)
        {
            GameObject trail = Instantiate(trails[trailIndex], gameObject.transform.position, Quaternion.identity);
            Destroy(trail, 0.2f);
            trailTime = trailTimes[trailIndex];

        }
      */
    }
}
