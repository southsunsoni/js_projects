from django.forms import ModelForm
from .models import tasch
class task_forms(ModelForm):
    class Meta:
        model=tasch
        fields=['titre','Descriptos','slugs']