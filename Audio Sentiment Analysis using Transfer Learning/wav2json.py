#!/usr/bin/env python3
import librosa
import sys
import numpy as np
from os import path, listdir
import json

def wav2json(wav, nf, dtype='train'):
    x, _=librosa.load(wav, res_type='kaiser_fast', duration=3, offset=0.5)
    mx=librosa.feature.mfcc(y=x, n_mfcc=25)
    mfccs=np.mean(mx, axis=0)
    mfccs=[-(mfccs/100)]
    mfccs=mfccs[0].tolist()
    fname=path.basename(wav)
    outd, ci=get_out_folder(fname)

    i=nf
    outf=path.join('Features-json', '%d.json' % i)
    print(outf)
    with open(outf, 'w') as out:
        out.write(json.dumps([ci]+mfccs))
    return ci

if __name__ == '__main__':
    dir=sys.argv[1]
    i=0
    for d in listdir(dir):
        if not path.isdir(path.join(dir, d)):
            continue
        for f in listdir(path.join(dir, d)):
            if not f.endswith('.wav'):
                continue
            fin=path.join(dir, d, f)
            i+=1
            wav2json(fin, i)
