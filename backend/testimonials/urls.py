from django.urls import path
from .views import TestimonialListView

urlpatterns = [
  path('', TestimonialListView.as_view()),
]
