import React, { useState } from 'react';
import './App.css';
const jsonData = [
  {
    "_id": "5c863a4e349",
    "balance": "$2,031.71",
    "age": 40,
    "eyeColor": "green",
    "name": "Joseph Cruz",
    "gender": "male",
    "company": "ZIDANT",
    "email": "josephcruz@zidant.com",
    "phone": "+1 (880) 464-2280",
    "address": "385 Woodrow Court, Freetown, Washington, 595",
    "registered": "2018-04-20T06:55:00 -05:00"
  },
  {
    "_id": "5c863a4e234",
    "balance": "$2,539.52",
    "age": 36,
    "eyeColor": "green",
    "name": "Lewis Workman",
    "gender": "male",
    "company": "ISOSTREAM",
    "email": "lewisworkman@isostream.com",
    "phone": "+1 (907) 587-3396",
    "address": "110 Moore Place, Jardine, Oklahoma, 1512",
    "registered": "2016-07-28T12:59:37 -05:00"
  },
  {
    "_id": "5c863a4e180",
    "balance": "$3,324.20",
    "age": 32,
    "eyeColor": "green",
    "name": "Elsa Donaldson",
    "gender": "female",
    "company": "ENTOGROK",
    "email": "elsadonaldson@entogrok.com",
    "phone": "+1 (938) 443-2079",
    "address": "230 Himrod Street, Sunriver, Virginia, 9205",
    "registered": "2018-03-08T01:14:36 -05:00"
  },
  {
    "_id": "5c863a4e2c6",
    "balance": "$3,187.08",
    "age": 25,
    "eyeColor": "blue",
    "name": "Vickie Hoover",
    "gender": "female",
    "company": "AMTAS",
    "email": "vickiehoover@amtas.com",
    "phone": "+1 (851) 597-2811",
    "address": "260 Nostrand Avenue, Greensburg, New York, 8456",
    "registered": "2016-09-18T01:30:51 -05:00"
  },
  {
    "_id": "5c863a4e2d",
    "balance": "$2,563.13",
    "age": 39,
    "eyeColor": "brown",
    "name": "Jeanne Sosa",
    "gender": "female",
    "company": "EARBANG",
    "email": "jeannesosa@earbang.com",
    "phone": "+1 (893) 546-3780",
    "address": "218 Krier Place, Tilden, Nevada, 5246",
    "registered": "2019-01-21T01:29:40 -05:00"
  },
  {
    "_id": "5c863a4e37",
    "balance": "$3,170.00",
    "age": 35,
    "eyeColor": "blue",
    "name": "Allyson Buckner",
    "gender": "female",
    "company": "PROWASTE",
    "email": "allysonbuckner@prowaste.com",
    "phone": "+1 (859) 439-3464",
    "address": "261 Seabring Street, Shasta, New Mexico, 1324",
    "registered": "2015-08-17T01:13:47 -05:00"
  },
  {
    "_id": "5c863a4e64",
    "balance": "$1,114.10",
    "age": 33,
    "eyeColor": "brown",
    "name": "Vivian Austin",
    "gender": "female",
    "company": "TROPOLI",
    "email": "vivianaustin@tropoli.com",
    "phone": "+1 (863) 600-3491",
    "address": "793 Lynch Street, Woodlake, Georgia, 735",
    "registered": "2015-05-11T08:24:43 -05:00"
  },
  {
    "_id": "5c863a4e5",
    "balance": "$3,015.69",
    "age": 35,
    "eyeColor": "blue",
    "name": "Celeste Gomez",
    "gender": "female",
    "company": "SKYPLEX",
    "email": "celestegomez@skyplex.com",
    "phone": "+1 (810) 564-3422",
    "address": "514 Ridgewood Avenue, Bendon, Vermont, 1772",
    "registered": "2016-01-10T01:59:11 -05:00"
  },
  {
    "_id": "5c863a4e580",
    "balance": "$1,918.01",
    "age": 37,
    "eyeColor": "blue",
    "name": "Ruth Harvey",
    "gender": "female",
    "company": "QUIZKA",
    "email": "ruthharvey@quizka.com",
    "phone": "+1 (815) 557-3078",
    "address": "980 Randolph Street, Stevens, Connecticut, 1823",
    "registered": "2017-05-25T02:03:53 -05:00"
  },
  {
    "_id": "5c863a4e6c",
    "balance": "$3,657.70",
    "age": 33,
    "eyeColor": "blue",
    "name": "Grace Maddox",
    "gender": "female",
    "company": "ZOMBOID",
    "email": "gracemaddox@zomboid.com",
    "phone": "+1 (980) 482-3526",
    "address": "451 Brooklyn Road, Urie, Marshall Islands, 3671",
    "registered": "2017-09-04T04:09:13 -05:00"
  },
  {
    "_id": "5c863a4eac",
    "balance": "$3,340.02",
    "age": 32,
    "eyeColor": "brown",
    "name": "Kristine Berg",
    "gender": "female",
    "company": "JIMBIES",
    "email": "kristineberg@jimbies.com",
    "phone": "+1 (904) 446-3602",
    "address": "211 Kenmore Court, Aberdeen, Mississippi, 7784",
    "registered": "2015-06-29T08:58:32 -05:00"
  },
  {
    "_id": "5c863a4e9bd",
    "balance": "$2,141.60",
    "age": 23,
    "eyeColor": "brown",
    "name": "Lavonne Avila",
    "gender": "female",
    "company": "ZILLANET",
    "email": "lavonneavila@zillanet.com",
    "phone": "+1 (877) 445-3164",
    "address": "555 Thomas Street, Grimsley, Federated States Of Micronesia, 2192",
    "registered": "2018-08-11T12:34:38 -05:00"
  },
  {
    "_id": "5c863a4e718",
    "balance": "$3,450.86",
    "age": 37,
    "eyeColor": "brown",
    "name": "Juana Tyler",
    "gender": "female",
    "company": "IMKAN",
    "email": "juanatyler@imkan.com",
    "phone": "+1 (921) 510-3490",
    "address": "142 Lafayette Walk, Sandston, New Jersey, 8384",
    "registered": "2017-09-25T02:59:11 -05:00"
  },
  {
    "_id": "5c863a4e557",
    "balance": "$3,507.22",
    "age": 31,
    "eyeColor": "brown",
    "name": "Myers Dale",
    "gender": "male",
    "company": "APEX",
    "email": "myersdale@apex.com",
    "phone": "+1 (972) 489-2913",
    "address": "234 Tehama Street, Courtland, Minnesota, 9515",
    "registered": "2015-02-08T01:30:42 -05:00"
  },
  {
    "_id": "5c863a4eaf3",
    "balance": "$2,045.80",
    "age": 26,
    "eyeColor": "green",
    "name": "Mooney Kirkland",
    "gender": "male",
    "company": "BIOLIVE",
    "email": "mooneykirkland@biolive.com",
    "phone": "+1 (943) 588-3753",
    "address": "966 Calder Place, Driftwood, Colorado, 1165",
    "registered": "2014-08-23T11:39:24 -05:00"
  },
  {
    "_id": "5c863a4e808",
    "balance": "$1,988.22",
    "age": 33,
    "eyeColor": "brown",
    "name": "Rene Lloyd",
    "gender": "female",
    "company": "ECSTASIA",
    "email": "renelloyd@ecstasia.com",
    "phone": "+1 (878) 518-3638",
    "address": "144 Chestnut Avenue, Mahtowa, California, 5952",
    "registered": "2017-07-16T06:37:22 -05:00"
  },
  {
    "_id": "5c863a4e91",
    "balance": "$1,953.61",
    "age": 32,
    "eyeColor": "blue",
    "name": "Parrish Norton",
    "gender": "male",
    "company": "HALAP",
    "email": "parrishnorton@halap.com",
    "phone": "+1 (816) 481-3364",
    "address": "813 Kent Avenue, Sardis, Louisiana, 4478",
    "registered": "2017-08-13T12:27:03 -05:00"
  },
  {
    "_id": "5c863a4e130",
    "balance": "$2,096.44",
    "age": 22,
    "eyeColor": "brown",
    "name": "Sheree Barrera",
    "gender": "female",
    "company": "CENTURIA",
    "email": "shereebarrera@centuria.com",
    "phone": "+1 (856) 585-2690",
    "address": "631 Beekman Place, Spelter, Palau, 3433",
    "registered": "2015-02-26T01:31:30 -05:00"
  },
  {
    "_id": "5c863a4eb77c",
    "balance": "$1,956.10",
    "age": 28,
    "eyeColor": "green",
    "name": "Olsen Lynch",
    "gender": "male",
    "company": "VERAQ",
    "email": "olsenlynch@veraq.com",
    "phone": "+1 (977) 427-3489",
    "address": "886 Norman Avenue, Knowlton, Alaska, 3286",
    "registered": "2016-05-17T10:00:29 -05:00"
  },
  {
    "_id": "5c863a4e93",
    "balance": "$2,305.94",
    "age": 28,
    "eyeColor": "green",
    "name": "Edna Velasquez",
    "gender": "female",
    "company": "ULTRASURE",
    "email": "ednavelasquez@ultrasure.com",
    "phone": "+1 (961) 600-3734",
    "address": "722 Huntington Street, Veyo, Indiana, 9504",
    "registered": "2018-07-17T10:58:40 -05:00"
  },
  {
    "_id": "5c863a4ed07f",
    "balance": "$3,637.02",
    "age": 27,
    "eyeColor": "blue",
    "name": "Rachael Walton",
    "gender": "female",
    "company": "ORGANICA",
    "email": "rachaelwalton@organica.com",
    "phone": "+1 (895) 462-3211",
    "address": "516 Sandford Street, Hamilton, District Of Columbia, 1054",
    "registered": "2016-10-08T11:37:52 -05:00"
  },
  {
    "_id": "5c863a4e617",
    "balance": "$1,172.22",
    "age": 28,
    "eyeColor": "green",
    "name": "Imelda Jarvis",
    "gender": "female",
    "company": "COMTREK",
    "email": "imeldajarvis@comtrek.com",
    "phone": "+1 (987) 465-2366",
    "address": "880 Gem Street, Leming, Missouri, 6329",
    "registered": "2016-08-11T03:32:00 -05:00"
  },
  {
    "_id": "5c863a4e82b",
    "balance": "$3,837.96",
    "age": 29,
    "eyeColor": "blue",
    "name": "Cardenas Sanchez",
    "gender": "male",
    "company": "PLASMOS",
    "email": "cardenassanchez@plasmos.com",
    "phone": "+1 (860) 520-2772",
    "address": "720 Nolans Lane, Belfair, Delaware, 6824",
    "registered": "2015-10-26T08:45:26 -05:00"
  },
  {
    "_id": "5c863a4ed885",
    "balance": "$1,139.38",
    "age": 39,
    "eyeColor": "brown",
    "name": "Roseann David",
    "gender": "female",
    "company": "TERRAGEN",
    "email": "roseanndavid@terragen.com",
    "phone": "+1 (985) 488-2521",
    "address": "130 Crosby Avenue, Thornport, Puerto Rico, 9236",
    "registered": "2017-08-31T12:28:53 -05:00"
  },
  {
    "_id": "5c863a4ea65",
    "balance": "$1,168.29",
    "age": 34,
    "eyeColor": "green",
    "name": "Shawn Pollard",
    "gender": "female",
    "company": "CIPROMOX",
    "email": "shawnpollard@cipromox.com",
    "phone": "+1 (820) 424-3885",
    "address": "632 Bryant Street, Snelling, Kansas, 2244",
    "registered": "2014-06-17T01:32:59 -05:00"
  },
  {
    "_id": "5c863a4e32a9b",
    "balance": "$2,499.43",
    "age": 24,
    "eyeColor": "blue",
    "name": "Leach Chang",
    "gender": "male",
    "company": "MAKINGWAY",
    "email": "leachchang@makingway.com",
    "phone": "+1 (892) 476-2979",
    "address": "747 McKinley Avenue, Taft, Virgin Islands, 3703",
    "registered": "2015-10-03T05:36:32 -05:00"
  },
  {
    "_id": "5c863a4e0750f",
    "balance": "$1,945.06",
    "age": 40,
    "eyeColor": "brown",
    "name": "Howe Riddle",
    "gender": "male",
    "company": "NIXELT",
    "email": "howeriddle@nixelt.com",
    "phone": "+1 (849) 412-3547",
    "address": "834 Otsego Street, Newcastle, Idaho, 2541",
    "registered": "2014-08-19T12:39:48 -05:00"
  },
  {
    "_id": "5c863a4e1588",
    "balance": "$2,890.02",
    "age": 33,
    "eyeColor": "green",
    "name": "Lenora Warren",
    "gender": "female",
    "company": "SLUMBERIA",
    "email": "lenorawarren@slumberia.com",
    "phone": "+1 (919) 585-3952",
    "address": "584 Navy Walk, Stonybrook, Kentucky, 2349",
    "registered": "2016-06-06T07:47:50 -05:00"
  },
  {
    "_id": "5c863a4e93ca",
    "balance": "$3,906.54",
    "age": 23,
    "eyeColor": "brown",
    "name": "Jody Dotson",
    "gender": "female",
    "company": "RONELON",
    "email": "jodydotson@ronelon.com",
    "phone": "+1 (852) 563-3488",
    "address": "197 Irving Place, Hasty, South Dakota, 3925",
    "registered": "2015-12-22T05:06:52 -05:00"
  },
  {
    "_id": "5c863a4eb45f",
    "balance": "$1,846.70",
    "age": 21,
    "eyeColor": "brown",
    "name": "Kelsey Knox",
    "gender": "female",
    "company": "NETILITY",
    "email": "kelseyknox@netility.com",
    "phone": "+1 (879) 561-3416",
    "address": "103 Fenimore Street, Gracey, Texas, 153",
    "registered": "2014-07-20T11:37:32 -05:00"
  },
  {
    "_id": "5c863a4ed4bb",
    "balance": "$1,135.58",
    "age": 23,
    "eyeColor": "blue",
    "name": "Nichols Lowery",
    "gender": "male",
    "company": "XANIDE",
    "email": "nicholslowery@xanide.com",
    "phone": "+1 (887) 422-2125",
    "address": "591 Berkeley Place, Dowling, Tennessee, 1701",
    "registered": "2016-01-03T06:13:42 -05:00"
  },
  {
    "_id": "5c863a4e98595",
    "balance": "$1,328.77",
    "age": 29,
    "eyeColor": "blue",
    "name": "Moore Humphrey",
    "gender": "male",
    "company": "ROUGHIES",
    "email": "moorehumphrey@roughies.com",
    "phone": "+1 (993) 510-2043",
    "address": "763 Karweg Place, Ona, New Hampshire, 4276",
    "registered": "2018-05-03T03:13:03 -05:00"
  },
  {
    "_id": "5c863a4e66e",
    "balance": "$2,779.82",
    "age": 28,
    "eyeColor": "brown",
    "name": "Mona Cardenas",
    "gender": "female",
    "company": "ISOLOGICA",
    "email": "monacardenas@isologica.com",
    "phone": "+1 (918) 585-3299",
    "address": "563 Oriental Court, Carrsville, Oregon, 2078",
    "registered": "2018-03-31T07:49:47 -05:00"
  },
  {
    "_id": "5c863a4ef6f",
    "balance": "$3,608.99",
    "age": 30,
    "eyeColor": "blue",
    "name": "Maddox Weiss",
    "gender": "male",
    "company": "BRAINCLIP",
    "email": "maddoxweiss@brainclip.com",
    "phone": "+1 (842) 494-2979",
    "address": "491 Bradford Street, Springdale, Northern Mariana Islands, 9051",
    "registered": "2014-03-09T08:50:56 -05:00"
  },
  {
    "_id": "5c863a4e78d6",
    "balance": "$2,816.22",
    "age": 36,
    "eyeColor": "blue",
    "name": "Patty Snow",
    "gender": "female",
    "company": "NEWCUBE",
    "email": "pattysnow@newcube.com",
    "phone": "+1 (992) 586-2449",
    "address": "385 Jefferson Street, Williams, Arizona, 8215",
    "registered": "2014-02-04T06:58:20 -05:00"
  },
  {
    "_id": "5c863a4e0816",
    "balance": "$2,316.79",
    "age": 26,
    "eyeColor": "green",
    "name": "Monique Davenport",
    "gender": "female",
    "company": "PROXSOFT",
    "email": "moniquedavenport@proxsoft.com",
    "phone": "+1 (999) 516-3310",
    "address": "648 Greenwood Avenue, Hampstead, West Virginia, 5340",
    "registered": "2014-11-26T01:41:58 -05:00"
  },
  {
    "_id": "5c863a4ec",
    "balance": "$3,980.31",
    "age": 23,
    "eyeColor": "green",
    "name": "Melva Mitchell",
    "gender": "female",
    "company": "MANGELICA",
    "email": "melvamitchell@mangelica.com",
    "phone": "+1 (935) 581-3121",
    "address": "650 Montauk Avenue, Caspar, Utah, 8818",
    "registered": "2015-09-20T01:41:04 -05:00"
  },
  {
    "_id": "5c863a4ee8",
    "balance": "$2,248.33",
    "age": 38,
    "eyeColor": "green",
    "name": "Robinson Guy",
    "gender": "male",
    "company": "LUNCHPOD",
    "email": "robinsonguy@lunchpod.com",
    "phone": "+1 (961) 548-2333",
    "address": "466 Kimball Street, Riner, Maryland, 9967",
    "registered": "2018-07-01T05:00:58 -05:00"
  },
  {
    "_id": "5c863a4e083",
    "balance": "$1,226.42",
    "age": 26,
    "eyeColor": "brown",
    "name": "Chang Frost",
    "gender": "male",
    "company": "VENOFLEX",
    "email": "changfrost@venoflex.com",
    "phone": "+1 (809) 576-2248",
    "address": "253 Bedell Lane, Woodburn, Illinois, 5359",
    "registered": "2017-01-07T07:25:04 -05:00"
  },
  {
    "_id": "5c863a4ebff",
    "balance": "$1,332.82",
    "age": 30,
    "eyeColor": "blue",
    "name": "Daugherty Moses",
    "gender": "male",
    "company": "UNCORP",
    "email": "daughertymoses@uncorp.com",
    "phone": "+1 (838) 529-2229",
    "address": "622 Bethel Loop, Blue, Guam, 1197",
    "registered": "2015-12-02T06:36:43 -05:00"
  }
];

const App = () => {
 
  const [data, setData] = useState(jsonData);
  const [formData, setFormData] = useState({ _id: '', balance: '', age: '', eyeColor: '', name: '', gender: '', company: '', email: '', phone: '', address: '', registered: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updatedData = data.map(item => (item._id === editId ? formData : item));
      setData(updatedData);
      setEditId(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({ _id: '', balance: '', age: '', eyeColor: '', name: '', gender: '', company: '', email: '', phone: '', address: '', registered: '' });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
  };

  const handleDelete = (id) => {
    const newData = data.filter(item => item._id !== id);
    setData(newData);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="_id" placeholder="ID" value={formData._id} onChange={handleChange}/>
        <input type="text" name="balance" placeholder="Balance" value={formData.balance} onChange={handleChange} />
        <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
        <input type="text" name="eyeColor" placeholder="EyeColor" value={formData.eyeColor} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="registered" placeholder="Registered" value={formData.registered} onChange={handleChange} />
        <button type="submit">{editId !== null ? 'Update' : 'Submit'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>Age</th>
            <th>EyeColor</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Registered</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.balance}</td>
              <td>{item.age}</td>
              <td>{item.eyeColor}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.company}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.registered}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                <button onClick={() => alert(`Read: ${item._id}`)}><span role="img" aria-label="Read">👁️</span></button>
                <button onClick={() => handleEdit(item)}><span role="img" aria-label="Edit">✏️</span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
