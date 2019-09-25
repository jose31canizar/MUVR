import json
# import utm

with open('nodes.json', 'r+') as f, open('stop_times.json', "r+") as s:
    data = json.load(f)
    stops = json.load(s)
    for d in data["DocumentElement"]:
        d['arrivalTime'] = [x['arrival_time'] for x in stops if x['stop_id'] == d['Node']]
        # latlon = utm.to_latlon(float(d['PosxNode'].replace(',', '.')), float(d['PosyNode'].replace(',', '.str(')), 30, 'T') # <--- add `id` value.)
        # d['latitude'] = str(latlon[0])
        # d['longitude'] = str(latlon[1])
        # print(json.dumps(d, indent=1))
    f.seek(0)        # <--- should reset file position to the beginning.
    json.dump(data, f, indent=4)
    f.truncate()     # remove remaining part