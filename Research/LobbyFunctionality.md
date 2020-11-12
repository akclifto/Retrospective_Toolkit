# Research Lobby Functionality

This is to supplement research from @sthoney, who looked at lobby functionality using React Context. For this research,  
@akclifto will be looking at Photon for C#.  The idea behind this is:  if we get Unity integrated into our web application, then we can use Unity to fully control the lobby and multi-user functionality. That being said, this would be contingent on Unity integration.  

## **Photon for Unity**

Photon Unity Network (PUN) is a package that allows for multiplayer games.  For our application, we would use it to have multiple users for an embedded Unity activity within the page.  It is probably overkill for what we need, but may work more effectively with an embbedded Unity activity.  

- Free account with up to 20 concurrent users
- [Photon Documentation](https://doc.photonengine.com/en-us/pun/v2/getting-started/pun-intro)
- Allows lobby system creation and UI setup
  - Done by essentially creating a scene and setting it as the launcher for the activity
  - Example:

```csharp
using UnityEngine;
using Photon.Pun;

namespace Com.Retrospective.Toolkit
{
    public class Launcher : MonoBehaviour
    {
        #region Private Serializable Fields

        #endregion

        #region Private Fields
        /// <summary>
        /// This client's version number. Users are separated from each other by gameVersion (which allows you to make breaking changes).
        /// </summary>
        string gameVersion = "1";

        #endregion

        #region MonoBehaviour CallBacks

        /// <summary>
        /// MonoBehaviour method called on GameObject by Unity during early initialization phase.
        /// </summary>
        void Awake()
        {
            // #Critical
            // this makes sure we can use PhotonNetwork.LoadLevel() on the master client and all clients in the same room sync their level automatically
            PhotonNetwork.AutomaticallySyncScene = true;
        }

        /// <summary>
        /// MonoBehaviour method called on GameObject by Unity during initialization phase.
        /// </summary>
        void Start()
        {
            Connect();
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Start the connection process.
        /// - If already connected, we attempt joining a random room
        /// - if not yet connected, Connect this application instance to Photon Cloud Network
        /// </summary>
        public void Connect()
        {
            // we check if we are connected or not, we join if we are , else we initiate the connection to the server.
            if (PhotonNetwork.IsConnected)
            {
                // #Critical we need at this point to attempt joining a Random Room. If it fails, we'll get notified in OnJoinRandomFailed() and we'll create one.
                PhotonNetwork.JoinRandomRoom();
            }
            else
            {
                // #Critical, we must first and foremost connect to Photon Online Server.
                PhotonNetwork.ConnectUsingSettings();
                PhotonNetwork.GameVersion = gameVersion;
            }
        }
        #endregion
    }
}
```

- Makes use of callBacks to relay most information.  
- `ConnectUsingSettings` allows online access to `PhotonServerSettings` assets to connect.  
- GameObject can be initialized as "networked GameObjects" in a `PhotonView` component.  

Example:

```csharp
// used as Observed component in a PhotonView, this only reads/writes the position
public void OnPhotonSerializeView(PhotonStream stream, PhotonMessageInfo info)
{
    // we could use something like this for roll-dice and transform in multi-user view.
    if (stream.IsWriting)
    {
        Vector3 pos = transform.localPosition;
        stream.Serialize(ref pos);
    }
    else
    {
        Vector3 pos = Vector3.zero;
        stream.Serialize(ref pos);  // pos gets filled-in. must be used somewhere
    }
}
```

Clients can do RPC on specific networked objects for infrequent tasks:

```csharp
// defining a method that can be called by other clients:
[PunRPC]
public void OnAwakeRPC(byte myParameter)
{
    //Debug.Log(string.Format("RPC: 'OnAwakeRPC' Parameter: {0} PhotonView: {1}", myParameter, this.photonView));
}
// calling the RPC somewhere else
photonView.RPC("OnAwakeRPC", RpcTarget.All, (byte)1);
```

- You can also send your own events, if necessary
- Game versioning possible
- Ability to use Cloud or on-premise, local servers
- Has game management and room creation prefabs

### **Drawbacks**

- Requires use of Photon servers.  This would be an extra step to get Photon up and running
  - It has a build in server wizard for Photon provided servers, but means we are reliant on some 3rd servers to be up and functional
  - It allows for creation of our own Photon server, but again would mean we need an additional step to get up and running
- Does not appear to be asynchronous (could be good or bad)

**This functionality would be hard to test without integration into our webapp for access to the source code from @dmobrie3.**
